const { IsJsonString } = require('../utils')

module.exports = (req, res, next) => {
    const query = {}

    for (const i in req.query) {
        const { error, result } = IsJsonString(req.query[i])
        if (error)
            query[i] = req.query[i]
        else
            query[i] = result
    }

    req.query = query
    next()
}
