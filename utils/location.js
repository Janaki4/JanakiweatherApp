const request = require('request')

const location = async(place,callback) => { 
    const url = `http://api.weatherapi.com/v1/current.json?key=01220a97f3184d0ba09190206221603&q=${place}&aqi=yes`;
    request({ url, json: true }, (err, { body }) => { 
        if (err) { 
            return callback(err,undefined)
        }
        if (body.error) {
          return callback(body.error.message , undefined)
        }
        return callback(undefined, {
           region: body.location.region,
           country: body.location.country,
           lat: body.location.lat,
            lon:body.location.lon,
            farenheat:body.current.temp_f,
            weatherCond:body.current.condition.text,
            icon:body.current.condition.icon
        })
    })
}

module.exports=location