const { Dal } = require('../../lib')
const schema = require('./schema')

class ProposallDal extends Dal { }

module.exports = new ProposallDal(schema)
