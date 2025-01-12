export { handlers, capitalize }

import { fetchWeather } from "./fetch_weather";
import { urlQuery } from "./url_query";
import { parseWeather } from "./parseWeather";
import { domUpdate } from "./dom_update";
import { appValues } from "./app_values";

const handlers = ( function() {
    async function searchWeather(e) {
        console.log('worfks?')
        e.preventDefault();

        const searchInput = this.querySelector('#search');

        const search = searchInput.value;
        
        if (!search) { return }

        appValues.setLocation(search);
        
        await queryWeather();
    }
    
    async function queryWeather() {
        console.log('Fetching...');
        const url = urlQuery();
        const weather = await fetchWeather(url);
        const parsed = parseWeather(weather);
        domUpdate(parsed);
        // return parsed;
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
        if (appValues.getLocation()) { await queryWeather() }
    }
    
    async function lang(e) {
        // Check current unit and change it
        const target = e.currentTarget;
        const unit = target.querySelector('a');

        appValues.changeLang();
        
        if (appValues.getLang() === 'en') {
            document.body.setAttribute('lang', 'en')
            unit.textContent = appValues.ES;
        } else {
            document.body.setAttribute('lang', 'es')
            unit.textContent = appValues.EN;
        }
        
        if (appValues.getLocation()) { await queryWeather() }
    }

    return {
        searchWeather,
        unitgroup, lang,
    }
} )()

function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}