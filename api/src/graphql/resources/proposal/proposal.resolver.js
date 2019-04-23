const { UserInputError } = require('apollo-server-express')
const { ProcessArgsToQuery } = require('../../process_args')
const { ProcessArgsToBody } = require('../../process_body')
const Service = require('../../../resources/final')
const ServicePartial = require('../../../resources/partial')

module.exports = () => ({
    Query: {
        proposal: async (root, args) => await Service.dao.findById(args.id),

        proposals: async (root, args/*, context*/) => {
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
        saveProposal: async (root, args) => {
            const { body, errors } = await ProcessArgsToBody(args, Service.dao)

            if (errors.length > 0) {
                throw new UserInputError('Invalid argumetns', errors)
            }

            await ServicePartial.dao.remove({ cpf: body.cpf })

            try {
                return await Service.dao.create(body)
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error)
                return error
            }
        }
    }
})
