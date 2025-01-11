export { urlQuery }

import { format } from "date-fns";
import { addDays } from "date-fns";

// Module for URL concern data

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=[YOUR_API_KEY]&include=[days]&unitGroup=[us/metric]&lang[en/es]

const WEEK_DAYS = 7;
const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
const _date1 = format(new Date(), 'yyyy-MM-dd');
const _date2 = format(addDays(new Date(), WEEK_DAYS), 'yyyy-MM-dd');

function urlQuery ( { location='london', unitGroup='us', lang='en', YOUR_API_KEY=API_KEY, date1=_date1, date2=_date2, }) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${YOUR_API_KEY}&include=days&unitGroup=${unitGroup}&lang${lang}`;
    return url;
}
