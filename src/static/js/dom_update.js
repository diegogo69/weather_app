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

const domNodes = {
    resolvedAddress,
    description,
    conditions,
    datetime,
    temp,
    feelslike,
    humidity,
    windspeed,
    minmax,
    moonphase,
    sunrise,
    sunset,
    icon: weatherIcon
}

function domUpdate(data) {
    for (let key in domNodes) {
        if (key === 'minmax') {
            domNodes[key].textContent = `Min: ${data.tempmin} / Max: ${data.tempmax}`;
            continue
        }
        
        domNodes[key].textContent = data[key];

    } 
}