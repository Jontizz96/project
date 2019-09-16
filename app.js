const dummyData = require('./dummy-data')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static("public"))

app.use(bodyParser.urlencoded({
	extended: false
}))

app.engine("hbs", expressHandlebars({
    defaultLayout:"main.hbs"
}))

app.get("/", function(req, res){
    res.render("home.hbs")
})

app.listen(8080, function(){console.log("started")})