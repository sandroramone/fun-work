const { ApolloServer } = require('apollo-server-express')
const resources = require('./resources')

exports.Graphql = async (app) => {

    const { root, resolvers, types } = resources(app)

    // const context = async ({ req, res }) => {

    //     const context = {}

    //     const authentication = await app.passport.authenticate('jwt')(req, res)

    //     Object.assign(req, authentication.data)

    //     let { mall } = req.feathers

    //     const provider = 'graphql_v2'

    //     Object.assign(context, {
    //         headers: req.headers,
    //         provider,
    //         mall,
    //     })

    //     if (req.user) {
    //         Object.assign(context, {
    //             user: req.user,
    //             payload: req.payload,
    //             authenticated: true,
    //         })
    //     }
    // }


    const server = new ApolloServer({
        typeDefs: [
            root,
            ...types
        ],
        resolvers,
        // context
    })

    await server.applyMiddleware({ app, path: '/v1/graphql' })

}
