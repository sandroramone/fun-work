const { gql } = require('apollo-server-express')

const types = gql`

    type Partial {
        _id: String
        productId: Int,
        name: String
        email: String
        cpf: String
        birthdate: String
        phone: String
        createdAt: String
        updatedAt: String
    }

    type Partials {
        total: Int
        items: [Partial]
    }
`

const queries = `
partial(id: String!): Partial

partials(
    ids: [String]
    limit: Int
    skip: Int
    productId: Int
    name: String
    email: String
    cpf: String
    birthdate: DateFilter
    phone: String
    createdAt: DateFilter
    updatedAt: DateFilter
    ) : Partials
`

const mutations = ''

module.exports = {
    mutations,
    queries,
    types
}
