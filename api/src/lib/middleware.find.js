const { IsJsonString } = require('../utils')

/**
 * sanitizeQuery is a middleware function that parses items contained
 * in the req.query to object
 * @memberof module:lib
 * @param {Object} req - is a request object
 * @param {Object} res - is response object
 * @param {Function} next - is the function that calls the next middleware
 */
const sanitizeQuery = (req, res, next) => {
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

module.exports = sanitizeQuery
