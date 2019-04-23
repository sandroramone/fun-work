const { gql } = require('apollo-server-express')

const types = gql`

    type Proposal {
        _id: String
        productId: Int
        name: String
        email: String
        cpf: String
        birthdate: String
        phone: String
        createdAt: String
        updatedAt: String
    }

    type Proposals {
        total: Int
        items: [Proposal]
    }
`

const queries = `
proposal(id: String!): Proposal

proposals(
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
    ) : Proposals
`

const mutations = `
    saveProposal(
        productId: Int!
        name: String!
        email: String!
        cpf: String!
        birthdate: String!
        phone: String!
    ) : Proposal
`

module.exports = {
    mutations,
    queries,
    types
}
