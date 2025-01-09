export { domNodes }

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
const tempmin = minmax.querySelector('.tempmin');
const tempmax = minmax.querySelector('.tempmax');
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
    },

    details: {
        description: {
            node: description
        },
        // minmax : {
        //     node: minmax
        // },
         
        tempmin: {
            node: tempmin,
            icon: 'thermometer-exterior'
        },
        tempmax: {
            node: tempmax,
            icon: 'thermometer'
        },
        // feelslike,
        humidity: {
            node: humidity,
            icon: 'humidity',
        },
        windspeed: {
            node: windspeed,
            icon: 'strong-wind'
        },
        // moonphase,
        sunrise: {
            node: sunrise,
            icon: 'sunrise'
        },
        sunset: {
            node: sunset,
            icon: 'sunset'
        }
    },

    days: weekDays,
}
