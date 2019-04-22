const express = require('express')
const spdy = require('spdy')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const resquestId = require('express-request-id')()
const fs = require('fs')

// eslint-disable-next-line no-unused-vars
const mongoose = require('./database')
const morgan = require('./log/morgan')
const bunyan = require('./log/bunyan')
const routes = require('./resources/routes')
const { FormatError } = require('./utils')

const app = express()

const options = {
    key: fs.readFileSync(__dirname + '/keys/server.key'),
    cert: fs.readFileSync(__dirname + '/keys/server.crt')
}

app.use(resquestId)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(expressValidator())

app.use(morgan())
app.use(morgan(false))
app.use((req, res, next) => {
    const log = bunyan.loggerInstace.child({
        id: req.id,
        body: req.body,
    }, true)
    log.info({ req })
    next()
})

app.use((req, res, next) => {
    const afterResponse = () => {
        res.removeListener('finish', afterResponse)
        res.removeListener('close', afterResponse)
        const log = bunyan.loggerInstace.child({
            id: req.id
        }, true)
        log.info({ res }, 'response')
    }

    res.on('finish', afterResponse)
    res.on('close', afterResponse)
    next()
})

app.use((req, res, next) => {

    if (res.req.method === 'POST' || res.req.method === 'PUT') {
        if (res.statusCode >= 400) {
            const oldSend = res.send
            res.send = (data) => {

                data = JSON.parse(data)

                data.errors = FormatError(data.errors)

                res.send = oldSend
                res.send(JSON.stringify(data))
            }
        }
    }

    next()
})

app.use('/api', routes)

app.use((err, req, res, next) => {
    if (!err) {
        let data = FormatError(err)

        res.status(500).json(data)
        next(err)
    }
    next()
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
