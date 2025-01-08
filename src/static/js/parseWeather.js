export { parseWeather };

// Process JSON data from request and return object with selected data
function parseWeather (data) {
    console.log(data);
    const resolvedAddress = data.resolvedAddress;
    const today = data.days[0];
    const parsedToday = parseToday(today);

    return {resolvedAddress, ...parsedToday}
}

function parseToday(today) {
    return {
        description: today.description,
        conditions: today.conditions,
        datetime: today.datetime,
        temp: today.temp,
        tempmin: today.tempmin,
        tempmax: today.tempmax,
        feelslike: today.feelslike,
        humidity: today.humidity,
        moonphase: today.moonphase,
        sunrise: today.sunrise,
        sunset: today.sunset,
        icon: today.icon,
        windspeed: today.windspeed
    }
}

// Data propoerties list
const keys = [
    'description',
    'conditions',
    'datetime',
    'temp',
    'tempmin',
    'tempmax',
    'feelslike',
    'humidity',
    'moonphase',
    'sunrise',
    'sunset',
    'icon'
]