const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=137fc7c569d2af9008d10ffbdebef81f&query=' + encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}
module.exports = forecast