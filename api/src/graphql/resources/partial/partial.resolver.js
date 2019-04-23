const { ProcessArgsToQuery } = require('../../process_args')
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
    }
})
