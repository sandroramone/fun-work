/** @module resources/partial */
const { Factory, Controller } = require('../../lib')
const schema = require('./schema')
const middlewares = require('./middleware')()

class customController extends Controller {
    async create(req, res, next) {
        if (req.body._id) {
            req.params.id = req.body._id
            return this.update(req, res, next)
        }
        try {
            const result = await this.dao.create(req.body)
            res.status(201).json({ success: true, token: result._id })
        } catch (err) {
            next(err)
        }
    }
}

const config = {
    schema,
    customController
}

/**
 * Export resource partial
 */
module.exports = Factory(config, middlewares)
