const express = require('express')
const spdy = require('spdy')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const fs = require('fs')

// eslint-disable-next-line no-unused-vars
const mongoose = require('./database')
const routes = require('./resources/routes')
const { FormatError } = require('./utils')

const app = express()

const options = {
    key: fs.readFileSync(__dirname + '/keys/server.key'),
    cert: fs.readFileSync(__dirname + '/keys/server.crt')
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())

app.use((req, res, next) => {

    if (res.req.method === 'POST' || res.req.method === 'PUT' && res.statusCode >= 400) {
        const oldSend = res.send

        res.send = (data) => {

            data = JSON.parse(data)

            data.errors = FormatError(data.errors)

            res.send = oldSend
            res.send(JSON.stringify(data))
        }
    }

    next()
})

app.use('/api', routes)

app.use((err, req, res, next) => {
    let data = FormatError(err)

    res.status(500).json(data)
    next(err)
})

spdy
    .createServer(options, app)
    .listen(3000, (err) => {
        if (err) {
            // eslint-disable-next-line no-console
            console.error(err)
            return process.exit(1)
        } else {
            // eslint-disable-next-line no-console
            console.log('Running on port 3000')
        }
    })
