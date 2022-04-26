const express = require('express')
const hbs= require('hbs')
const path= require('path')
const location = require('./utils/location')
const port = process.env.PORT || 3000
const app = express()

// const place = process.argv[2]

const pathDirectory = path.join(__dirname , "./public")
const viewsPath = path.join(__dirname, "./templates/views")
const partialPath=path.join(__dirname ,"./templates/partials" )
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)
app.use(express.static(pathDirectory))

app.get('', (req, res) => { 
    res.render('index', {
        name: 'janakiraman',
        age:22
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.location) { 
        return res.send({
            "error":"Enter location to get current weather"
        })
    }
    location(req.query.location, (error, { region, country, lat, lon, farenheat, weatherCond, icon }={} ) => {
        if (error) {
            return res.send({
                error
            })
        }
        console.log(partialPath)
        res.send({
            region,
            country,
            lat,
            lon,
            farenheat,
            weatherCond,
            icon
        })
    })
    
})


app.listen(port, () => {
    console.log('port' , port)
 })