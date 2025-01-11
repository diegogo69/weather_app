export { urlQuery }

import { API_KEY, DATE1, DATE2 } from "./app_values";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=[YOUR_API_KEY]&include=[days]&unitGroup=[us/metric]&lang[en/es]

function urlQuery ( { location='london', unitGroup='us', lang='en', YOUR_API_KEY=API_KEY, date1=DATE1, date2=DATE2, }) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${YOUR_API_KEY}&include=days&unitGroup=${unitGroup}&lang=${lang}`;
    console.log(url);
    return url;
}
