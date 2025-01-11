export { domElements }

const domElements = {
    summary: [
        {
            name: 'icon',
            class: 'weather-icon',
        },
        {
            name: 'resolvedAddress',
            class: 'resolved-address',
        },
        {
            name: 'datetime',
            class: 'datetime',
        },
        {
            name: 'temp',
            class: 'temp',
        },
        {
            name: 'feelslike',
            class: 'feelslike',
        },
        {
            name: 'conditions',
            class: 'conditions',
        }
    ],

    details: [
        {
            name: 'description',
            class: 'description',
        },
        {
            name: 'tempmin',
            class: 'tempmin',
            icon: 'thermometer-exterior',
            unit: '°F'
        },
        {
            name: 'tempmax',
            class: 'tempmax',
            icon: 'thermometer',
            unit: '°F'
        },
        {
            name: 'humidity',
            class: 'humidity',
            icon: 'humidity',
            unit: '%'
        },
        // moonphase,
        {
            name: 'sunrise',
            class: 'sunrise',
            icon: 'sunrise',
            unit: 'hour'
        },
        {
            name: 'sunset',
            class: 'sunset',
            icon: 'sunset',
            unit: 'hour'
        },
        {
            name: 'windspeed',
            class: 'windspeed',
            icon: 'strong-wind',
            unit: 'mph'
        }
    ],

    days: [
        {
            name: 'days',
            class: 'week-days'
        }
    ] 
}