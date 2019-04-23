const { gql } = require('apollo-server-express')

const generic = gql`
    input DateFilter {
        start: String
        end: String
    }
`

module.exports = {
    generic
}
