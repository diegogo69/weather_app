export { domNodes }

const domNodes = {
    summary: {
        node: null,
        children: {
            icon: null,
            resolvedAddress: null,
            conditions: null,
            datetime: null,
            temp: null,
            feelslike: null,
        }
    },

    details: {
        node: null,
        children: {
            description: null,
            tempmin: null,
            tempmax: null,
            humidity: null,
            windspeed: null,
            // moonphase,
            sunrise: null,
            sunset: null,
        }
    },
    days: {
        node: null,
        children: null
    },
}

