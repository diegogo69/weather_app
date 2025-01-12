export { handlers, capitalize }

import { fetchWeather } from "./fetch_weather";
import { urlQuery } from "./url_query";
import { parseWeather } from "./parseWeather";
import { domUpdate } from "./dom_update";
import { appValues } from "./app_values";
import { dialogNode } from "./dialog";

const handlers = ( function() {
    async function searchWeather(e) {
        console.log('worfks?')
        e.preventDefault();

        const searchInput = this.querySelector('#search');

        const search = searchInput.value;
        
        if (!search) { return }

        appValues.setLocation(search);
        
        await queryWeather().catch(errorHandler);
    }
    
    async function queryWeather() {
        console.log('Fetching...');
        const url = urlQuery();

        const response = await fetchWeather(url);
        console.log('fetched');
        const parsed = await response.json();
        console.log('parsed');
        const weather = parseWeather(parsed);
        domUpdate(weather);
        // return parsed;
    }

    function errorHandler(err) {
        dialogNode.show();
    }

    async function unitgroup(e) {
        // Check current unit and change it
        const target = e.currentTarget;
        const unit = target.querySelector('a');

        appValues.changeUnitGroup();

        if (appValues.getUnitGroup() === 'us') {
            unit.textContent = appValues.units.us;
        } else {
            unit.textContent = appValues.units.metric;
        }
        if (appValues.getLocation()) { await queryWeather().catch(errorHandler) }
    }
    
    return {
        searchWeather,
        unitgroup,
    }
} )()

function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}