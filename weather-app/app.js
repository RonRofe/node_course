const request = require('request')

const url = 'https://api.darksky.net/forecast/41a3fe85b932f3fdfd3deeff3b61b2ec/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
    console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFwaXRlYyIsImEiOiJjazJpc2RjdWwwanFyM2Rva2JqeGFpMXR0In0.oS3EQ44XX_b4Zxlf-INbuw&limit=1'

request({ url: geocodeURL , json: true}, (error, response) => {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
})