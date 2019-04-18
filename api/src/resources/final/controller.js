const { Controller } = require('../../lib')
const dao = require('./dao')

class ProposalController extends Controller { }

console.log('final', dao.Schema.modelName)

module.exports = new ProposalController(dao)
