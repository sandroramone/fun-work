const { expect } = require('chai')
const { isEmailvalid } = require('../../../src/utils')


describe('Utils library', () => {

    beforeEach(() => {
    })

    describe('smoke test', () => {
        it('should exists function isEmailvalid', () => {
            expect(isEmailvalid).to.exist
        })
    })

    describe('isEmailvalid', () => {

        it('Using isEmailvalid in correct values', () => {
            const email = 'user@email.com'
            const result = isEmailvalid(email)
            expect(result).to.be.equal(true)
        })

        it('Using isEmailvalid in correct values with .br', () => {
            const email = 'user@email.com.br'
            const result = isEmailvalid(email)
            expect(result).to.be.equal(true)
        })

        it('Using isEmailvalid in incorrect values', () => {
            const email = 'useremail.com.br'
            const result = isEmailvalid(email)
            expect(result).to.be.equal(false)

            const email2 = 'user@emailcombr'
            const result2 = isEmailvalid(email2)
            expect(result2).to.be.equal(false)
        })
    })
})
