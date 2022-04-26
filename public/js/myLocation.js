const request = require('request')

const currLocation = async  (lat,lon,callback) => { 
       
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${lon}.json?access_token=pk.eyJ1IjoiamFuYWtpcmFtYW4wMCIsImEiOiJjbDB1MGpzeGQwMWc0M2JtbzVlczJjbzh0In0.Hy7XsnSs_rqICg1Uo02u1A`
        request({ url, json: true }, (error, body) => { 
                if (error) {
                    console.log(error.message)
                    return callback(error.message, undefined)
                }
                console.log(body.feature[0].context[4].text)
               return callback(undefined, {
                    data: body.feature[0].context[4].text
                })
        }
    )
}


module.exports=currLocation
    