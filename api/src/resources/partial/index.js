const { Factory } = require('../../lib')
const schema = require('./schema')

const config = {
    schema
}

module.exports = Factory(config)
