export { domInit }
import { handlers } from "./handlers";
import { domNodes } from "./dom_nodes";

function domInit() {
    // Search event listener
    const searchForm = document.querySelector('.search-form');
    document.querySelector('#search').value = 'caracas';


    searchForm.addEventListener('submit', handlers.searchWeather);
}

const summary = {
    'weather-icon': null,
    'resolved-address': null,
    'datetime': null,
    'temp': null,
    'feelslike': null,
    'conditions': null,
}

function createSummary(nodes) {
    const summary = document.createElement('div');
    summary.classList.add('summary-container', 'summary');

    for (let node of nodes) {
        const el = document.createElement('div');
        el.classList.add(node['class']);

        summary.appendChild('el');
    }

    return summary;
}

function createDetails(nodes) {
    const details = document.createElement('div');
    details.classList.add('details-container', 'details');

    for (let node of nodes) {
        let el;
        switch (node['class']) {
            case 'description':
                el = document.createElement('p');
                break;
            default:
                el = document.createElement('div');
                break;
        }
        el.classList.add(node['class']);

        details.appendChild('el');
    }

    return details;
}

const WEEK_DAYS = 7;

function createWeekDays() {
    const weekdays = document.createElement('div');
    weekdays.classList.add('week-container');

    for (let i = 0; i < WEEK_DAYS; i++) {
        const weekday = document.createElement('div');

        const day = document.createElement('div');
        day.classList.add('day');

        const icon = document.createElement('div');
        icon.classList.add('weather-icon');

        const conditions = document.createElement('div');
        conditions.classList.add('weather-conditions');

        weekday.appendChild(day);
        weekday.appendChild(icon);
        weekday.appendChild(conditions);

        weekdays.appendChild(weekday);
    }

    return weekdays;

}

