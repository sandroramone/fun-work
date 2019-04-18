/**
 * @class Dal
 * @memberof module:lib
 */
class Dal {
    constructor(Schema) {
        this.Schema = Schema
    }

    create(body) {
        const schema = new this.Schema(body)
        return schema.save()
    }

    count() {
        return this.Schema.count().exec()
    }

    find(page, ...args) {
        return this.Schema
            .find(...args).skip(page * 1).limit(10)
            .exec()
    }

    findOne(...args) {
        return this.Schema
            .findOne(...args)
            .exec()
    }

    findById(...args) {
        return this.Schema
            .findById(...args)
            .exec()
    }

    update(...args) {
        return this.Schema
            .update(...args)
            .exec()
    }

    remove(...args) {
        return this.Schema
            .remove(...args)
            .exec()
    }
}

module.exports = Dal
