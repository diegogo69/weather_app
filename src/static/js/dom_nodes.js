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
// const minmax = detailsContainer.querySelector('.minmax');
const tempmin = detailsContainer.querySelector('.tempmin');
const tempmax = detailsContainer.querySelector('.tempmax');
const sunrise = detailsContainer.querySelector('.sunrise');
const sunset = detailsContainer.querySelector('.sunset');
const moonphase = detailsContainer.querySelector('.moonphase');

const weekContainer = main.querySelector('.week-container');
const weekDays = weekContainer.querySelectorAll('.week-day');

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
