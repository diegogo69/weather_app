import { format } from "date-fns";
import { icons } from "./icons";
import { clearNode } from "./dom_handlers";

export { domUpdate }
const main = document.querySelector('main');

const summaryContainer = main.querySelector('.summary-container');

const resolvedAddress = summaryContainer.querySelector('.resolved-address');
const conditions = summaryContainer.querySelector('.conditions');
const datetime = summaryContainer.querySelector('.datetime');
const temp = summaryContainer.querySelector('.temp');
const weatherIcon = summaryContainer.querySelector('.weather-icon');

const detailsContainer = main.querySelector('.details-container');

const description = detailsContainer.querySelector('.description');
const feelslike = detailsContainer.querySelector('.feelslike');
const humidity = detailsContainer.querySelector('.humidity');
const windspeed = detailsContainer.querySelector('.windspeed');
const minmax = detailsContainer.querySelector('.minmax');
const sunrise = detailsContainer.querySelector('.sunrise');
const sunset = detailsContainer.querySelector('.sunset');
const moonphase = detailsContainer.querySelector('.moonphase');

const weekContainer = main.querySelector('.week-container');
const weekDays = weekContainer.querySelectorAll('.week-day');

const domNodes = {
    icon: weatherIcon,
    resolvedAddress,
    description,
    conditions,
    datetime,
    temp,

    minmax,
    feelslike,
    humidity,
    windspeed,
    moonphase,
    sunrise,
    sunset,

    days: null,
}

function domUpdate(data) {
    for (let key in domNodes) {
        if (key === 'minmax') {
            domNodes[key].textContent = `Min: ${data.tempmin} / Max: ${data.tempmax}`;
            continue
        } else if (key === 'days') {
            updateWeek(data[key]);
            continue
        } else if (key === 'datetime') {
            domNodes[key].textContent = format(data[key], 'EEEE, MMM do')
            continue
        } else if (key === 'icon') {
            const icon = data[key].replaceAll('-', '_');
            // console.log('icon: ', icon);

            const img = document.createElement('img');
            img.src = icons[icon];

            clearNode(domNodes[key]);   
            domNodes[key].appendChild(img);

            continue
        }
        
        domNodes[key].textContent = data[key];

    } 
}

function updateWeek(days) {
    console.log(format(new Date(), 'EEEE'))
    for (let i = 0; i < days.length; i++) {
        const dayNode = weekDays[i].querySelector('.day');
        const iconNode = weekDays[i].querySelector('.weather-icon');
        
        if (i === 0) {
            dayNode.textContent = 'Tomorrow';
        } else {
            // Somehow the dot at the end normalizes the date
            const datetime = `${days[i]['datetime']}.`;
            dayNode.textContent = format(new Date(datetime), 'EEEE');
        }

        const icon = days[i]['icon'].replaceAll('-', '_');
        // console.log('icon: ', icon);

        const img = document.createElement('img');
        img.src = icons[icon];

        clearNode(iconNode);   
        iconNode.appendChild(img);

    }
}