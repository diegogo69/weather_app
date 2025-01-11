export { domUpdate }

import { format } from "date-fns";
import { icons } from "./icons";
import { clearNode } from "./dom_handlers";
import { domNodes } from "./dom_nodes";
import { capitalize } from "./handlers";
import { detailsInfo } from "./details_info";

function domUpdate(data) {
    for (let key in domNodes) {
        switch (key) {
            case 'summary':
                updateSummary(domNodes[key]['children'], data);
                break;
            case 'details':
                updateDetails(domNodes[key]['children'], data);
                break;
            case 'days':
                updateWeek(domNodes[key]['children'], data[key]);
                break;
        }
    }
}

function updateSummary(summary, data) {
    for (let key in summary) {
        switch (key) {
            case 'datetime':
                // Somehow the dot at the end normalizes the date
                const datetime = `${data[key]}.`;
                const dateObj = new Date(datetime);
                summary[key].textContent = format(dateObj, 'EEEE, MMM do');
                break;
            case 'temp':
                summary[key].textContent = `${data[key]} °F`;
                break;
            case 'feelslike':
                summary[key].textContent = `Feelslike ${data[key]} °F`;
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
function updateDetails(nodes, data, info=detailsInfo) {
    for (let key in nodes) {
        // Item of details elements
        const detailNode = nodes[key];
        console.log(detailNode);

        // Add text to node. If text
        if (key === 'description') {
            detailNode.textContent = data[key];
            continue
        }
        let title = detailNode.querySelector('.title');
        
        if (!title) {
            title = document.createElement('header');
            title.classList.add('title');
            detailNode.appendChild(title);
        }
        // Will it work?
        title.textContent = capitalize(key);

        const unit = info[key]['unit'] || '';

        let text = detailNode.querySelector('.text');

        if (!text) {
            text = document.createElement('p');
            text.classList.add('text');
            // Will it work
            detailNode.appendChild(text);
        }

        if (unit === 'hour') {
            // Ramdon date for formatting time as 12h am/pm 
            const date = `2011-11-11T${data[key]}`;
            text.textContent = format(date, 'hh:mmaaa')
        } else {
            text.textContent = `${data[key]}${unit}`;
        }

        const iconName = info[key]['icon'];

        if (iconName) {
            let icon = detailNode.querySelector('.icon');

            if (!icon) {
                icon = document.createElement('div');
                icon.classList.add('icon');
                detailNode.appendChild(icon);
            }

            icon.innerHTML = `<i class="wi wi-${iconName}"></i>`
        }
    }
}

function updateWeek(weekDays, data) {
    console.log(format(new Date(), 'EEEE'))

    for (let i = 0; i < data.length; i++) {
        const dayNode = weekDays[i].querySelector('.day');
        const iconNode = weekDays[i].querySelector('.weather-icon');
        const conditions = weekDays[i].querySelector('.conditions');

        let dayString = '';
        switch (i) {
            case 0:
                dayString += 'Tomorrow';
                break;
            case (data.length - 1):
                dayString += 'Next ';
                // No break, bcs 'Next ...day'
            default:
                // Somehow the dot at the end normalizes the date
                const datetime = `${data[i]['datetime']}.`;
                const dateObj = new Date(datetime);
                dayString += format(dateObj, 'EEEE');
                break;
        }
        dayNode.textContent = dayString;

        const icon = data[i]['icon'].replaceAll('-', '_');

        const img = document.createElement('img');
        img.classList.add('icon');
        img.src = icons[icon];

        clearNode(iconNode);
        iconNode.appendChild(img);

        conditions.textContent = data[i]['conditions'];
    }
}