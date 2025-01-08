export { fetchWeather };
// Get weather from location

const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
const date1 = '2025-01-08';

async function fetchWeather(location) {
    console.log('fetching weather');
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}?key=${API_KEY}`;

    const fetchResponse = await fetch(url, {mode: 'cors'});
    return await fetchResponse.json();
}
