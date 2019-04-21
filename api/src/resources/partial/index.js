/** @module resources/partial */
const { Factory, Controller } = require('../../lib')
const schema = require('./schema')

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

const mid = {
    find: [],
    post: [
        (req, res, next) => {
            if (req.body.token) {
                req.body = { ...req.body, _id: req.body.token }
                delete req.body.token
            }
            next()
        }
    ],
    get: [],
    put: [],
    delete: []
}

const config = {
    schema,
    customController
}

/**
 * Export resource partial
 */
module.exports = Factory(config, mid)
