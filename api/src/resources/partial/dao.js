const { Dal } = require('../../lib')
const schema = require('./schema')

class PartialDal extends Dal { }

module.exports = new PartialDal(schema)
