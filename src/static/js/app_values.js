export { WEEK_DAYS}
export { API_KEY, date1, date2 }
export { appValues }

import { format, addDays } from "date-fns";

const appValues = (function () {
    const WEEK_DAYS = 7;
    const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
    const date1 = format(new Date(), 'yyyy-MM-dd');
    const date2 = format(addDays(new Date(), WEEK_DAYS), 'yyyy-MM-dd');

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
    }

    return {
        WEEK_DAYS, API_KEY, date1, date2,
        getLang, changeLang,
        getUnitGroup, changeUnitGroup
    }
})()

const {
    WEEK_DAYS,
    API_KEY,
    date1,
    date2
} = appValues;
