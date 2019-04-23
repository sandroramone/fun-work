const fs = require('fs')
const { gql } = require('apollo-server-express')
const deepmerge = require('deepmerge')

const { generic } = require('./generic_types')

module.exports = function (app) {
    let resolvers = []
    let queries = []
    let mutations = []
    let types = []

    fs.readdirSync(__dirname).forEach(file => {
        if (file != 'index.js' && file != 'generic_types.js' && file.substr(0, 1) != '.') {
            resolvers.push(require(`./${file}/${file}.resolver`))
            queries.push(require(`./${file}/${file}.schema`).queries)
            mutations.push(require(`./${file}/${file}.schema`).mutations)
            types.push(require(`./${file}/${file}.schema`).types)
        }
    })

    resolvers = resolvers
        .map((r) => r(app))
        .reduce((p, l) => deepmerge(p, l))

    const root = gql`
        type Query {
            ${queries.join('')}
        }
        type Mutation {
            ${mutations.join('')}
        }
        schema {
            query: Query
            mutation: Mutation
        }
    `

    types = [generic, ...types]

    return {
        resolvers,
        root,
        types
    }
}
