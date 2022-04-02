const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=137fc7c569d2af9008d10ffbdebef81f&query=' + encodeURIComponent(address)
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback("unable to connect to location services!", undefined)
        } else if(response.body.error){
            callback("unable to find location. try another search", undefined)
        } else{
            callback(undefined, {
                latitude: response.body.location.lat,
                longitude: response.body.location.lon,
                location: response.body.location.timezone_id
            })
        }
    })
}
module.exports = geocode