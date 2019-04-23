const { expect } = require('chai')
const { isBirthdateValid } = require('../../../src/utils')


describe('Utils library', () => {

    let oldDateOk
    let oldDateError
    let youngDateOk
    let youngDateError
    beforeEach(() => {
        let date = new Date()
        oldDateError = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() - 66}`)
        oldDateOk = new Date(`${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear() - 66}`)
        youngDateError = new Date(`${date.getMonth() + 1}/${date.getDate() + 1}/${date.getFullYear() - 18}`)
        youngDateOk = new Date(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() - 18}`)
    })

    describe('smoke test', () => {
        it('should exists function isBirthdateValid', () => {
            expect(isBirthdateValid).to.exist
        })
    })

    describe('isBirthdateValid', () => {

        it('Using isBirthdateValid in correct old age values', () => {
            const result = isBirthdateValid(oldDateOk)
            expect(result).to.be.equal(true)
        })

        it('Using isBirthdateValid in incorrect old age values', () => {
            const result = isBirthdateValid(oldDateError)
            expect(result).to.be.equal(false)
        })

        it('Using isBirthdateValid in correct young age values', () => {
            const result = isBirthdateValid(youngDateOk)
            expect(result).to.be.equal(true)
        })

        it('Using isBirthdateValid in incorrect young age values', () => {
            const result = isBirthdateValid(youngDateError)
            expect(result).to.be.equal(false)
        })
    })
})
