// Import CSS
import "./static/css/modern-normalize.css";
import "./static/css/styles.css";

const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
// Get weather from location
async function fetchWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

    const fetchResponse = await fetch(url, {mode: 'cors'});
    return await fetchResponse.json();
}

// Process JSON data from request and return object with selected data
function parseWeather (data) {
    console.log(data);
    const resolvedAddress = data.resolvedAddress;
    const today = data.days[0];
    const parsedToday = parseToday(today);

    return {resolvedAddress, ...parsedToday}
}

function parseToday(today) {
    return {
        description: today.description,
        conditions: today.conditions,
        datetime: today.datetime,
        temp: today.temp,
        tempmin: today.tempmin,
        tempmax: today.tempmax,
        feelslike: today.feelslike,
        humidity: today.humidity,
        moonphase: today.moonphase,
        sunrise: today.sunrise,
        sunset: today.sunset,
        icon: today.icon
    }
}

async function main() {
    const weather = await fetchWeather('caracas');
    const parsed = parseWeather(weather);
    console.log(parsed);
        
}

main()
// Setup a form for user input and request weather of location


// By now just use console.log




const keys = [
    'description',
    'conditions',
    'datetime',
    'temp',
    'tempmin',
    'tempmax',
    'feelslike',
    'humidity',
    'moonphase',
    'sunrise',
    'sunset',
    'icon'
]