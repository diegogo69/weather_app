export { fetchWeather };

async function fetchWeather(url) {
    const fetchResponse = await fetch(url, {mode: 'cors'});
    return await fetchResponse.json();
}
