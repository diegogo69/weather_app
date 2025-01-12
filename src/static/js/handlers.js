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

    function unitgroup(e) {
        // Check current unit and change it
        const target = e.currentTarget;
        const unit = target.querySelector('a');

        appValues.changeUnitGroup();

        if (appValues.getUnitGroup() === 'us') {
            unit.textContent = appValues.US;
        } else {
            unit.textContent = appValues.METRIC;
        }
    }
    
    function lang(e) {
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
    }

    return {
        searchWeather,
        unitgroup, lang,
    }
} )()

function capitalize(s) {
    return String(s).charAt(0).toUpperCase() + String(s).slice(1);
}