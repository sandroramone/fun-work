const express = require('express')
const spdy = require('spdy')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const fs = require('fs')

const mongoose = require('./database')
const routes = require('./resources/routes')

const app = express()

const options = {
    key: fs.readFileSync(__dirname + '/keys/server.key'),
    cert: fs.readFileSync(__dirname + '/keys/server.crt')
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())

app.use('/api', routes)

spdy
    .createServer(options, app)
    .listen(3000, (err) => {
        if (err) {
            console.error(err)
            return process.exit(1)
        } else {
            console.log('Running on port 3000')
        }
    })
