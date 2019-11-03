const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/41a3fe85b932f3fdfd3deeff3b61b2ec/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            })
        }
    })
}

module.exports = forecast