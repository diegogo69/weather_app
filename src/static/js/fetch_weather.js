export { fetchWeather };
import { format } from "date-fns";
import { addDays } from "date-fns";

const NEXT_DAYS = 7;

const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
const date1 = format(new Date(), 'yyyy-MM-dd');
const date2 = format(addDays(new Date(), NEXT_DAYS), 'yyyy-MM-dd');

console.log(date1);
console.log(date2);

async function fetchWeather(location) {
    console.log('fetching weather');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${API_KEY}`;
    console.log(url);   

    const fetchResponse = await fetch(url, {mode: 'cors'});
    return await fetchResponse.json();
}
