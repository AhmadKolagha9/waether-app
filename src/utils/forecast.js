const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=137fc7c569d2af9008d10ffbdebef81f&query=' + encodeURIComponent(latitude)+','+ encodeURIComponent(longitude)
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback("unable to connect to weather services!", undefined)
        } else if(response.body.error){
            callback("unable to find weather. try another search", undefined)
        } else{
            callback(undefined, "temperature: " +  response.body.current.temperature +
            " feelslike: " + response.body.current.feelslike)
        }
    })
}
module.exports = forecast