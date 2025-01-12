export { fetchWeather };

async function fetchWeather(url) {
    try {
        const response = await fetch(url, { mode: 'cors' });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response;
        
    } catch (error) {
        throw error;
    }
}