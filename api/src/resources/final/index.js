/** @module resources/final */
const { Factory } = require('../../lib')
const schema = require('./schema')
const middlewares = require('./middlewares')(schema)

const config = {
    schema
}

/**
 * Export resource final
 */
module.exports = Factory(config, middlewares)
