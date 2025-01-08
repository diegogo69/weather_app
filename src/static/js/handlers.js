export { handlers }

import { fetchWeather } from "./fetch_weather";
import { parseWeather } from "./parseWeather";
import { domUpdate } from "./dom_update";

const handlers = ( function() {
    async function searchWeather(e) {
        console.log('worfks?')
        e.preventDefault();

        const searchInput = this.querySelector('#search');

        const search = searchInput.value;
        
        if (!search) { return }
        const weather = await fetchWeather(search);
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