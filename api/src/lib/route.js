const { Router } = require('express')
const router = new Router()

module.exports = (controller) => {
    router
        .route('/')
        .get((...args) => controller.find(...args))
        .post((...args) => {
            console.log(args)
            controller.create(...args)
        })

    router
        .route('/:id')
        .get((...args) => controller.findById(...args))
        .put((...args) => controller.update(...args))
        .delete((...args) => controller.remove(...args))

    return router
}

