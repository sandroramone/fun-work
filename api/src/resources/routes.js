const fs = require('fs')
const { Router } = require('express')
const router = new Router()

const final = require('./final/route')
const partial = require('./partial/route')

// fs.readdirSync(__dirname).forEach(path => {
//     console.log(path)
//     if (path != 'routes.js' && path.substr(0, 1) != '.') {
//         console.log(`/${path}`, require(`./${path}/route`), `./${path}/route`)
//         router.use(`/${path}`, require(`./${path}/route`))
//     }
// })

router.use('/final', final)
router.use('/partial', partial)

module.exports = router
