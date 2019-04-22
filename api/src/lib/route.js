const { Router } = require('express')
const sanitizeQueryFind = require('./middleware.find')

const mid = {
    find: [],
    post: [],
    get: [],
    put: [],
    delete: []
}

/**
 * createRoute is a function that receives a controller and an object
 * containing middlewares referring to the route methods
 * @memberof module:lib
 * @param {InstanceType<Controller>} controller
 * @param {Object} middlewares
 * @example // middlewares
 * const middleware = {
 *   find: [(req, res, next) => {
 *      console.log('my middleware')
 *      next()
 *   }],
 *   post: [],
 *   get: [],
 *   put: [],
 *   delete: []
 * }
 */
const createRoute = (controller, middlewares = mid) => {
    const router = new Router()

    router
        .route('/')
        .get(sanitizeQueryFind, ...middlewares.find, (...args) => controller.find(...args))
        .post(...middlewares.post, (...args) => controller.create(...args))

    router
        .route('/:id')
        .get(...middlewares.get, (...args) => controller.findById(...args))
        .put(...middlewares.put, (...args) => controller.update(...args))
        .delete(...middlewares.delete, (...args) => controller.remove(...args))

    return router
}


module.exports = createRoute
