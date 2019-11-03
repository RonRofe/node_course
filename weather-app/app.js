const request = require('request')

const url = 'https://api.darksky.net/forecast/41a3fe85b932f3fdfd3deeff3b61b2ec/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})