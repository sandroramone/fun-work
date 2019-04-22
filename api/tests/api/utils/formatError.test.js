const { expect } = require('chai')
const { FormatError } = require('../../../src/utils')


describe('Utils library', () => {

    let error1
    let error2
    let error3
    beforeEach(() => {
        error1 = new Error('Testando')

        error2 = {
            path: 'users',
            value: 'robot',
        }

        error3 = [{
            location: 'body',
            msg: 'Invalid value',
            param: 'username'
        }]
    })

    describe('smoke test', () => {
        it('should exists function FormatError', () => {
            expect(FormatError).to.exist
        })
    })

    describe('FormatError', () => {

        it('Using FormatError with instace of Error', () => {
            const result = JSON.stringify(FormatError(error1))
            expect(result).to.be.equal('{"errors":{"params":[],"messages":["Testando"]}}')
        })

        it('Using FormatError in object', () => {
            const result = JSON.stringify(FormatError(error2))
            expect(result).to.be.equal('{"errors":{"params":["users"],"messages":["Unexpected value \\"robot\\" in \\"users\\""]}}')

            delete error2.path
            const result2 = JSON.stringify(FormatError(error2))
            expect(result2).to.be.equal('{"errors":{"params":[],"messages":["Unexpected value \\"robot\\" in \\"undefined\\""]}}')
        })

        it('Using FormatError in array return of express validator', () => {
            const result = JSON.stringify(FormatError(error3))
            expect(result).to.be.equal('{"errors":{"params":["username"],"messages":["Invalid value"]}}')
        })
    })
})
