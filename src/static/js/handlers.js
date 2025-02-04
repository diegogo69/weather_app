export { handlers, capitalize }

import { fetchWeather } from "./fetch_weather";
import { urlQuery } from "./url_query";
import { parseWeather } from "./parseWeather";
import { domUpdate } from "./dom_update";
import appValues from "./app_values";
import { dialogNode } from "./dialog";

const loader = document.querySelector('.loader-wrapper');

const handlers = ( function() {
    async function searchWeather(e) {
        e.preventDefault();

        const searchInput = this.querySelector('#search');

        const search = searchInput.value.trim();
        searchInput.value = search;
        
        if (!search) { return }

        appValues.setLocation(search);
        
        await queryWeather().catch(errorHandler);
    }
    
    async function queryWeather() {
        const url = urlQuery();

        loader.style.display = 'block';

        const response = await fetchWeather(url);
        const parsed = await response.json();
        const weather = parseWeather(parsed);
        domUpdate(weather);

        loader.style.display = 'none';
    }

    function errorHandler(err) {
        loader.style.display = 'none';
        dialogNode.showModal();
    }

    
    async function unitgroup(e) {
        // Check current unit and change it
        const target = e.currentTarget;
        const unit = target.querySelector('a');

        appValues.changeUnitGroup();

        if (appValues.getUnitGroup() === 'us') {
            unit.textContent = appValues.units.metric;
        } else {
            unit.textContent = appValues.units.us;
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