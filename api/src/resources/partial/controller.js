const { Controller } = require('../../lib')
const dao = require('./dao')

class PartialController extends Controller { }

console.log('partial', dao.Schema.modelName)

module.exports = new PartialController(dao)
