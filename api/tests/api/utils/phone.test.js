const { expect } = require('chai')
const { validatorPhone } = require('../../../src/utils')


describe('Utils library', () => {

    beforeEach(() => {
    })

    describe('smoke test', () => {
        it('should exists function validatorPhone', () => {
            expect(validatorPhone).to.exist
        })
    })

    describe('validatorPhone', () => {

        it('Using validatorPhone in correct values', () => {
            const phone = '+55 (18) 3272-3495'
            const result = validatorPhone(phone)
            expect(result).to.be.equal(true)
        })

        it('Using validatorPhone in incorrect values', () => {
            const phone = '551832723495'
            const result = validatorPhone(phone)
            expect(result).to.be.equal(false)
        })
    })
})
