/**
 * Dal is representing actions in database
 * @memberof module:lib
 */
class Dal {

    /**
     * @param {mongoose.Model} Schema - is a mongoose model used to make
     * the calls to the database
     */
    constructor(Schema) {
        this.Schema = Schema
    }

    /**
     * create save the data entered in the database
     * @param {Object} body - is the data to be inserted into the
     * database using the schema
     * @returns {Object} - is the recording of stored data
     */
    create(body) {
        const schema = new this.Schema(body)
        return schema.save()
    }

    /**
     * count is a method that returns the amount of records in
     * the database filtered by the query entered through the query
     * @param {Object} query - is an object with the information
     * to be used to filter the data
     * @returns {Number} - a number of count result
     */
    count(query) {
        return this.Schema.countDocuments(query).exec()
    }

    /**
     * find is a method that uses the schema to fetch a list of data filtered
     * by the query entered in the query
     * @param {Object} query - is an object with the information
     * to be used to filter the data
     * @returns {Array} an array of found items that meet the query's requirements
     */
    async find(query) {
        const { skip, limit, select } = query
        delete query.skip
        delete query.limit
        delete query.select

        const items = await this.Schema
            .find(query)
            .select(select)
            .skip(parseInt(skip || 0))
            .limit(parseInt(limit || 10))
            .exec()

        const total = await this.Schema
            .countDocuments(query)
            .exec()

        return { total, items }
    }

    /**
     * findOne is a method that uses the schema to fetch the first
     * item that satisfies the query requirements
     * @param {Object} query - is an object with the information
     * to be used to filter the data
     * @returns {Object} - the first item found that meets
     * the query requirements
     */
    findOne(query) {
        return this.Schema
            .findOne(query)
            .exec()
    }

    /**
     * findById is a method that uses the schema to fetch
     * the item that has the id entered in the query
     * @param {string} id - is the identifier of the resource you want to find
     * @returns {Object} - the found item that meets the id
     */
    findById(id) {
        return this.Schema
            .findById(id)
            .exec()
    }

    /**
     * update is a method that updates the information in the
     *  registry in the database
     * @param {Object} query - is an object with the information
     * to be used to filter the data
     * @param {Object} body - - are the data to be updated
     * in the database using the schema
     * @returns {Object} - contains found items(n), updated items(nModified), and ok if all normal occurred
     */
    update(query, body) {
        return this.Schema
            .updateOne(query, body)
            .exec()
    }

    /**
     * remove is a method that excludes a record
     * in the database that matches the query filters
     * @param {Object} query - is an object with the information
     * to be used to filter the data
     */
    remove(query) {
        return this.Schema
            .deleteOne(query)
            .exec()
    }
}

module.exports = Dal
