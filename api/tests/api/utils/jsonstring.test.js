const { expect } = require('chai')
const { IsJsonString } = require('../../../src/utils')


describe('Utils library', () => {

    let string
    let json
    beforeEach(() => {
        string = 'name: Jhon Doe'
        json = '{"name": "Jhon Doe"}'
    })

    describe('smoke test', () => {
        it('should exists function IsJsonString', () => {
            expect(IsJsonString).to.exist
        })
    })

    describe('IsJsonString', () => {

        it('Try parse not json value', () => {
            const { error, result } = IsJsonString(string)
            expect(error).to.be.equal(true)
            expect(result).to.be.equal(null)
        })

        it('Try parse string in json format', () => {
            const { error, result } = IsJsonString(json)
            expect(error).to.be.equal(false)
            expect(typeof result).to.be.equal('object')
        })
    })
})
