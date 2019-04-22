const { expect } = require('chai')
const { Diff } = require('../../../src/utils')


describe('Utils library', () => {

    let json1
    let json2
    beforeEach(() => {
        let jsonbase = '{ "name": "Jhon Doe", "home": { "address": "Elm Street"} }'
        json1 = JSON.parse(jsonbase)
        json2 = JSON.parse(jsonbase)
    })

    describe('smoke test', () => {
        it('should exists function Diff', () => {
            expect(Diff).to.exist
        })
    })

    describe('Diff', () => {

        it('Using Diff in equal values', () => {
            const result = JSON.stringify(Diff(json2, json1))
            expect(result).to.be.equal('{}')
        })

        it('Using Diff in different values', () => {
            json2.age = 31
            const result = JSON.stringify(Diff(json2, json1))
            expect(result).to.be.equal('{"age":31}')
        })

        it('Using Diff in different values with nested object', () => {
            json2.childrens = { name: 'Jane'}
            json2.home.address = 'Crystal Lake'
            const result = JSON.stringify(Diff(json2, json1))
            expect(result).to.be.equal('{"home":{"address":"Crystal Lake"},"childrens":{"name":"Jane"}}')
        })
    })
})
