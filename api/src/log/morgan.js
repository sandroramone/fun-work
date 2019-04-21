const morgan = require('morgan')
const fs = require('fs')
const path = require('path')

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const loggerFormat = ':id :remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'
morgan.token('id', (req) => req.id)

module.exports = (file = true) => morgan(
    loggerFormat,
    {
        stream: file ? accessLogStream : process.stdout
    }
)
