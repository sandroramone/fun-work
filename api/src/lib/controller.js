/**
 * Controller is representing actions
 * @memberof module:lib
 * */
class Controller {

    /**
     * @param {Dao!} dao
     */
    constructor(dao) {
        this.dao = dao
    }


    create(req, res, next) {
        this.dao.create(req.body)
            .then(doc => res.status(201).json(doc))
            .catch(err => next(err))
    }

    /**
     * @param {function} req is a request
     * @param {function} res is response
     * @param {function} next is a next middleware
     * @returns {number} total count of collection
     */
    count(req, res, next) {
        return this.dao.count()
            .then(doc => res.status(200).json(doc))
            .catch(err => next(err))
    }

    find(req, res, next) {
        return this.dao.find(req.params.page, req.query)
            .then(collection => res.status(200).json(collection))
            .catch(err => next(err))
    }

    findOne(req, res, next) {
        return this.dao.findOne(req.query)
            .then(doc => res.status(200).json(doc))
            .catch(err => next(err))
    }

    findById(req, res, next) {
        return this.dao.findById(req.params.id)
            .then((doc) => {
                if (!doc) { return res.sendStatus(404) }
                return res.status(200).json(doc)
            })
            .catch(err => next(err))
    }

    update(req, res, next) {
        this.dao.update({ _id: req.params.id }, req.body)
            .then((results) => {
                if (results.n < 1) { return res.sendStatus(404) }
                if (results.nModified < 1) { return res.sendStatus(304) }
                res.sendStatus(204)
            })
            .catch(err => next(err))
    }

    remove(req, res, next) {
        this.dao.remove({ _id: req.params.id })
            .then((doc) => {
                if (!doc) { return res.sendStatus(404) }
                return res.sendStatus(204)
            })
            .catch(err => next(err))
    }
}

module.exports = Controller
