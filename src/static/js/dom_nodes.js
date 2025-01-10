export { domNodes }

const main = document.querySelector('main');

const summaryContainer = main.querySelector('.summary-container');

const resolvedAddress = summaryContainer.querySelector('.resolved-address');
const datetime = summaryContainer.querySelector('.datetime');
const temp = summaryContainer.querySelector('.temp');
const feelslike = summaryContainer.querySelector('.feelslike');
const conditions = summaryContainer.querySelector('.conditions');
const weatherIcon = summaryContainer.querySelector('.weather-icon');

const detailsContainer = main.querySelector('.details-container');

const description = detailsContainer.querySelector('.description');
const humidity = detailsContainer.querySelector('.humidity');
const windspeed = detailsContainer.querySelector('.windspeed');
const tempmin = detailsContainer.querySelector('.tempmin');
const tempmax = detailsContainer.querySelector('.tempmax');
const sunrise = detailsContainer.querySelector('.sunrise');
const sunset = detailsContainer.querySelector('.sunset');
const moonphase = detailsContainer.querySelector('.moonphase');

const weekContainer = main.querySelector('.week-container');
const weekDays = weekContainer.querySelectorAll('.week-day');

const domElements = {
    summary: [
        {
            name: 'icon',
            class: 'weather-icon',
        },
        {
            name: 'resolvedAddress',
            class: 'resolved-address',
        },
        {
            name: 'datetime',
            class: 'datetime',
        },
        {
            name: 'temp',
            class: 'temp',
        },
        {
            name: 'feelslike',
            class: 'feelslike',
        },
        {
            name: 'conditions',
            class: 'conditions',
        }
    ],

    details: [
        {
            name: 'description',
            class: 'description',
        },
        {
            name: 'tempmin',
            class: 'tempmin',
            icon: 'thermometer-exterior',
            unit: '°F'
        },
        {
            name: 'tempmax',
            class: 'tempmax',
            icon: 'thermometer',
            unit: '°F'
        },
        {
            name: 'humidity',
            class: 'humidity',
            icon: 'humidity',
            unit: '%'
        },
        // moonphase,
        {
            name: 'sunrise',
            class: 'sunrise',
            icon: 'sunrise',
            unit: 'hour'
        },
        {
            name: 'sunset',
            class: 'sunset',
            icon: 'sunset',
            unit: 'hour'
        },
        {
            name: 'windspeed',
            class: 'windspeed',
            icon: 'strong-wind',
            unit: 'mph'
        }
    ],

    days: {
        name: 'days',
        class: 'week-days'
    },
}

const domNodes = {
    summary: {
        icon: weatherIcon,
        resolvedAddress,
        conditions,
        datetime,
        temp,
        feelslike
    },

    details: {
        description: {
            node: description
        },         
        tempmin: {
            node: tempmin,
            icon: 'thermometer-exterior',
            unit: '°F'
        },
        tempmax: {
            node: tempmax,
            icon: 'thermometer',
            unit: '°F'
        },
        humidity: {
            node: humidity,
            icon: 'humidity',
            unit: '%'
        },
        windspeed: {
            node: windspeed,
            icon: 'strong-wind',
            unit: 'mph'
        },
        // moonphase,
        sunrise: {
            node: sunrise,
            icon: 'sunrise',
            unit: 'hour'
        },
        sunset: {
            node: sunset,
            icon: 'sunset',
            unit: 'hour'
        }
    },

    days: weekDays,
}