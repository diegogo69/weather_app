// Import CSS
// import "./static/css/modern-normalize.css";
// import "./static/css/styles.css";

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 

// location (required) – is the address, partial address or latitude,longitude location
// Dates should be in the format yyyy-MM-dd
// When no date1 or date2 is specified, the request will retrieve the forecast at the requested location for the next 15 days.

// London,UK?key=YOUR_API_KEY 
// 38.9697,-77.385?key=YOUR_API_KEY 
// London,UK/2020-10-01/2020-12-31?key=YOUR_API_KEY 

const API_KEY = 'JEPSLX6ZDSGFY6GFXGTRNWS9J';
// Get weather from location
async function fetchWeather(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`;

    const fetchResponse = await fetch(url, {mode: 'cors'});
    const jsonData = await fetchResponse.json();

    console.log(jsonData);
}


// Process JSON data from request and return object with selected data



// Setup a form for user input and request weather of location


// By now just use console.log