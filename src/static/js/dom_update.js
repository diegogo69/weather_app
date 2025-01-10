export { domUpdate }

import { format } from "date-fns";
import { icons } from "./icons";
import { clearNode } from "./dom_handlers";
import { domNodes } from "./dom_nodes";
import { capitalize } from "./handlers";

function domUpdate(data) {
    for (let key in domNodes) {
        switch (key) {
            case 'summary':
                updateSummary(domNodes[key], data);
                break;
            case 'details':
                updateDetails(domNodes[key], data);
                break;
            case 'days':
                updateWeek(domNodes[key], data[key]);
                break;
        }
    }
}

function updateSummary(summary, data) {
    for (let key in summary) {
        switch (key) {
            case 'datetime':
                summary[key].textContent = format(data[key], 'EEEE, MMM do');
                break;
            case 'temp':
                summary[key].textContent = `${data[key]} °F`;
                break;
            case 'icon':
                const icon = data[key].replaceAll('-', '_');
                const img = document.createElement('img');
                img.classList.add('icon', 'weather-icon');
                img.src = icons[icon];

                clearNode(summary[key]);
                summary[key].appendChild(img);
                break;
            default:
                summary[key].textContent = data[key];
                break;
        }
    }
}

// function updateDetails( { description, tempmin, tempmax, feelslike, humidiy, windspeed, moonphase, sunrise, sunset}) {
function updateDetails(details, data) {
    for (let key in details) {
        // Item of details elements
        const detailNode = details[key]['node'];

        // Add text to node. If text
        if (key === 'description') {
            detailNode.textContent = data[key];
            continue
        }
        const title = document.createElement('header');
        title.classList.add('title');
        title.textContent = capitalize(key);
        detailNode.appendChild(title);

        const unit = details[key]['unit'] || '';

        const text = document.createElement('p');
        text.classList.add('text');

        if (unit === 'hour') {
            // Ramdon date for formatting time as 12h am/pm 
            const date = `2011-11-11T${data[key]}`;
            text.textContent = format(date, 'hh:mmaaa')
        } else {
            text.textContent = `${data[key]}${unit}`;
        }
        detailNode.appendChild(text);

        const iconName = details[key]['icon'];

        if (iconName) {
            const icon = document.createElement('div');
            icon.classList.add('icon');
            icon.innerHTML = `<i class="wi wi-${iconName}"></i>`
            detailNode.appendChild(icon);
        }
    }
}

function updateWeek(weekDays, data) {
    console.log(format(new Date(), 'EEEE'))

    for (let i = 0; i < data.length; i++) {
        const dayNode = weekDays[i].querySelector('.day');
        const iconNode = weekDays[i].querySelector('.weather-icon');
        const conditions = weekDays[i].querySelector('.conditions');

        if (i === 0) {
            dayNode.textContent = 'Tomorrow';
        } else {
            // Somehow the dot at the end normalizes the date
            const datetime = `${data[i]['datetime']}.`;
            dayNode.textContent = format(new Date(datetime), 'EEEE');
        }

        const icon = data[i]['icon'].replaceAll('-', '_');

        const img = document.createElement('img');
        img.classList.add('icon');
        img.src = icons[icon];

        clearNode(iconNode);
        iconNode.appendChild(img);

        conditions.textContent = data[i]['conditions'];
    }
}