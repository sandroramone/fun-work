const Dal = require('./dal')
const Controller = require('./controller')
const Route = require('./route')

class factorylDal extends Dal { }
class factoryController extends Controller { }

/**
 * @typedef config
 * @type {Object}
 * @memberof module:lib
 * @property {mongoose.Model!} schema - is a instance of mongoose model
 * @property {controller} [customController] - is an instance of the controller
 * @property {dao} [customDao] - is an instance of the dao
 */

/**
 * Factory is an integrated route generating function with controller
 * and its dao, each route generated is ready for use bantando to be
 * attached in destination path
 * @memberof module:lib
 * @param {config} config
 * @param {Object} middlewares
 */
const Factory = (
    { schema, customController = factoryController, customDao = factorylDal }
    , middlewares
) => {
    const dao = new customDao(schema)
    const controller = new customController(dao)

    const route = new Route(controller, dao, middlewares)
    return route
}

module.exports = Factory
