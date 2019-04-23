const { expect } = require('chai')
const { isCpfValid } = require('../../../src/utils')


describe('Utils library', () => {

    beforeEach(() => {
    })

    describe('smoke test', () => {
        it('should exists function isCpfValid', () => {
            expect(isCpfValid).to.exist
        })
    })

    describe('isCpfValid', () => {

        it('Using isCpfValid in correct values', () => {
            const cpf = '94406019065'
            const result = isCpfValid(cpf)
            expect(result).to.be.equal(true)
        })

        it('Using isCpfValid in incorrect values', () => {
            const cpf = '11111111111'
            const result = isCpfValid(cpf)
            expect(result).to.be.equal(false)
        })

        it('Using isCpfValid in incorrect random values', () => {
            const cpf = '23874591290'
            const result = isCpfValid(cpf)
            expect(result).to.be.equal(false)
        })

        it('Using isCpfValid in incorrect values, length < 11', () => {
            const cpf = '2387459290'
            const result = isCpfValid(cpf)
            expect(result).to.be.equal(false)
        })
    })
})
