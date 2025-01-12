// Import CSS
import "./static/css/modern-normalize.css";
import "./static/css/styles.css";
import "./static/css/dropdown.css";
import "./static/css/loader.css";
import "./static/css/weather-icons-wind.min.css";
import "./static/css/weather-icons.min.css";

import { fetchWeather } from "./static/js/fetch_weather";
import { parseWeather } from "./static/js/parseWeather";
import { urlQuery } from "./static/js/url_query";

import { domInit } from "./static/js/dom_init";
import { domUpdate } from "./static/js/dom_update";

async function main() {
    if (!(localStorage.getItem('weather'))) {
        const url = urlQuery('caracas');
        const weather = await fetchWeather(url);
        const parsed = parseWeather(weather);
        console.log(parsed);
        localStorage.setItem('weather', JSON.stringify(parsed));
    }

    domUpdate(JSON.parse(localStorage.getItem('weather')));
        
}

// localStorage.clear();
domInit();
// main();





