const notFound = {
    errors: {
        params: [],
        messages: ['Resource not found']
    }
}

/**
 * Controller represents default actions used by
 * routes to manipulate information
 * @memberof module:lib
 * */
class Controller {

    /**
     * @param {Dal!} dao - instance of a class dao for access to stored data
     */
    constructor(dao) {
        this.dao = dao
    }

    /**
     * create is the method that creates a resource using the dao class for persistence
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     * @returns {Object} - use response to returns resource created
     */
    async create(req, res, next) {
        try {
            const result = await this.dao.create(req.body)
            res.status(201).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * count is a method that returns the amount of records in
     * the database filtered by the query entered through the req
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     * @returns {number} use response to returns total count of collection
     */
    async count(req, res, next) {
        try {
            const result = await this.dao.count(req.body)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * find is a method that uses the dao class to fetch a list of data filtered
     * by the query entered in the request
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     * @returns {Object} - use response to returns object
     * containing the total of items and a list of items
     * @example // return
     * {total: 100, items: [{id:1},{id:3},{id:3}]}
     */
    async find(req, res, next) {
        try {
            const result = await this.dao.find(req.query)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * findOne is a method that uses the dao class to fetch data filtered
     * by the query entered in the request and return the first item found
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     * @returns {Object} - use response to returns object found
     */
    async findOne(req, res, next) {
        try {
            const result = await this.dao.findOne(req.query)
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * findById is a method that uses the dao class to fetch a
     * record in the database filtered by the informed id
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     * @returns {Object} - use response to returns object found
     */
    async findById(req, res, next) {
        try {
            const result = await this.dao.findById(req.params.id)

            if (!result)
                return res.status(404).json(notFound)

            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * update is a method that uses the dao class to update
     * information from a record in the database
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     */
    async update(req, res, next) {
        try {
            const result = await this.dao.update(
                { _id: req.params.id },
                req.body
            )

            if (result == null) { return res.status(404).json(notFound) }

            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }

    /**
     * remove is a method that uses the dao class to delete a record
     * in the database filtered by the id entered in the req.params
     * @param {Object} req - is a request object
     * @param {Object} res - is response object
     * @param {Function} next - is the function that calls the next middleware
     */
    async remove(req, res, next) {
        try {
            const result = await this.dao.remove({ _id: req.params.id })
            if (!result) { res.status(404).json(notFound) }
            res.status(204).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller
