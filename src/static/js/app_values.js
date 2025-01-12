import { format, addDays } from "date-fns";

const appValues = (function () {
    const WEEK_DAYS = 7;
    const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
    const DATE1 = format(new Date(), 'yyyy-MM-dd');
    const DATE2 = format(addDays(new Date(), WEEK_DAYS), 'yyyy-MM-dd');

    const units = {
        metric: 'km/h - °C',
        us: 'mph - °F',
        temp: '°F',
        speed: 'mph',
        percent: '%'
    }

    const ES = 'Español';
    const EN = 'English';

    let location;

    function  getLocation() {
        return location;
    }

    function setLocation(val) {
        location = val;
        return location;
    }


    let lang = 'en';

    function getLang() {
        return lang;
    }

    function changeLang() {
        lang = (lang === 'en') ? 'es' : 'en';
    }

    let unitGroup = 'us';

    function getUnitGroup() {
        return unitGroup;
    }

    function changeUnitGroup() {
        unitGroup = (unitGroup === 'us') ? 'metric' : 'us';

        switch (unitGroup) {
            case 'us':
                units.temp = '°F';
                units.speed = 'mph';
                break;
            case 'metric':
                units.temp = '°C';
                units.speed = 'km/h';
                break;
            default:
                break;
        }
    }

    return {
        WEEK_DAYS, API_KEY, DATE1, DATE2,
        ES, EN, units,
        getLang, changeLang,
        getUnitGroup, changeUnitGroup,
        getLocation, setLocation,
    }
})();

export default appValues
