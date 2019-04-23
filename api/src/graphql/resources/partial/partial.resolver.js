const { UserInputError } = require('apollo-server-express')
const { ProcessArgsToQuery } = require('../../process_args')
const { ProcessArgsToBody } = require('../../process_body')
const Service = require('../../../resources/partial')

module.exports = () => ({
    Query: {
        partial: async (root, args) => await Service.dao.findById(args.id),

        partials: async (root, args/*, context*/) => {
            const query = ProcessArgsToQuery(args)

            try {
                return await Service.dao.find(query)
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error.stack)
                return error
            }
        }
    },

    Mutation: {
        savePartial: async (root, args) => {
            const { body, errors } = await ProcessArgsToBody(args)

            if (errors.length > 0) {
                throw new UserInputError('Invalid argumetns', errors)
            }

            const { token } = body
            delete body.token

            try {
                if (token) {
                    let result = await Service.dao.update({ _id: token }, body)
                    result.token = result._id
                    return result
                } else {
                    let result = await Service.dao.create(body)
                    result.token = result._id
                    return result
                }
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error)
                return error
            }
        }
    }
})
