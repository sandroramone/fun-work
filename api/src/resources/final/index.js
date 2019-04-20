const { Factory } = require('../../lib')
const middlewares = require('./middlewares')
const schema = require('./schema')

const config = {
    schema
}

module.exports = Factory(config, middlewares)
