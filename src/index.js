// Import CSS
import "./static/css/modern-normalize.css";
import "./static/css/styles.css";
// import "./static/css/weather-icons-wind.css";
import "./static/css/weather-icons-wind.min.css";
// import "./static/css/weather-icons.css";
import "./static/css/weather-icons.min.css";

import { fetchWeather } from "./static/js/fetch_weather";
import { parseWeather } from "./static/js/parseWeather";

import { domInit } from "./static/js/dom_init";

async function main() {
    const weather = await fetchWeather('caracas');
    const parsed = parseWeather(weather);
    console.log(parsed);
        
}


domInit()
// main()
// Setup a form for user input and request weather of location


// By now just use console.log




