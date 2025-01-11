export { handlers, capitalize }

import { fetchWeather } from "./fetch_weather";
import { urlQuery } from "./url_query";
import { parseWeather } from "./parseWeather";
import { domUpdate } from "./dom_update";

const handlers = ( function() {
    async function searchWeather(e) {
        console.log('worfks?')
        e.preventDefault();

        const searchInput = this.querySelector('#search');

        const location = searchInput.value;
        
        if (!location) { return }
        // Pass lang and unitGroup
        const url = urlQuery({ location, lang:'es', unitGroup:'metric' });
        const weather = await fetchWeather(url);
        const parsed = parseWeather(weather);

        // fetchWeather(search)
        // .then(parseWeather(weather))
        // .then(console.log(parsed))
        console.log(parsed)
        domUpdate(parsed);
    }
    
    return {
        searchWeather,
    }
} )()

function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}