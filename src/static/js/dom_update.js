export { domUpdate }

import { format } from "date-fns";
import { icons } from "./icons";
import { clearNode } from "./dom_handlers";
import { domNodes } from "./dom_nodes";
import { capitalize } from "./handlers";

function domUpdate(data) {
    for (let key in domNodes) {
        if (key === 'summary') {
            updateSummary(domNodes[key], data) 
        } else if (key === 'days') {
            updateWeek(domNodes[key], data[key]);
        } else if (key === 'details') {
            updateDetails(domNodes[key], data);
        }
    }
}

function updateSummary(summary, data) {
    for (let key in summary) {
        if (key === 'datetime') {
            summary[key].textContent = format(data[key], 'EEEE, MMM do')

        } else if (key === 'temp') {
            summary[key].textContent = `${data[key]} °F`;

        } else if (key === 'icon') {
            const icon = data[key].replaceAll('-', '_');
            // console.log('icon: ', icon);

            const img = document.createElement('img');
            img.classList.add('icon', 'weather-icon');
            img.src = icons[icon];

            clearNode(summary[key]);
            summary[key].appendChild(img);
        } else {
            summary[key].textContent = data[key];
        }
    }
}

// function updateDetails( { description, tempmin, tempmax, feelslike, humidiy, windspeed, moonphase, sunrise, sunset}) {
function updateDetails(details, data) {
    for (let key in details) {

        const detailNode = details[key]['node'];

        // Add text to node. If text
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

        if (i === 0) {
            dayNode.textContent = 'Tomorrow';
        } else {
            // Somehow the dot at the end normalizes the date
            const datetime = `${data[i]['datetime']}.`;
            dayNode.textContent = format(new Date(datetime), 'EEEE');
        }

        const icon = data[i]['icon'].replaceAll('-', '_');
        // console.log('icon: ', icon);

        const img = document.createElement('img');
        img.classList.add('icon');
        img.src = icons[icon];

        clearNode(iconNode);
        iconNode.appendChild(img);

    }
}