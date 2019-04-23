/** @module resources */
const fs = require('fs')
const { Router } = require('express')
const router = new Router()

fs.readdirSync(__dirname).forEach(path => {
    if (path != 'routes.js' && path.substr(0, 1) != '.') {
        router.use(`/${path}`, require(`./${path}`).router)
    }
})

/** This module export generated resources to routes */
module.exports = router
