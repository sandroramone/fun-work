const { model, Schema } = require('mongoose')
const { LogSchema } = require('../../log/database/schema')
const { Diff } = require('../../utils')

/**
 * @memberof module:models
 * @typedef Incomplete O dataset da proposta
 * @type {Schema}
 * @property {number} productId Código do produto (int)
 * @property {string} name Nome do usuário
 * @property {string} email Email do usuário
 * @property {string} CPF Número de CPF do usuário
 * @property {date} birthdate Data de nascimento do usuário
 * @property {string} phone Número de telefone do usuário
 */
const schema = new Schema({
    productId: { type: Number, required: true },
    name: { type: String, require: true },
    email: { type: String },
    cpf: { type: String, index: true },
    birthdate: { type: Date, required: true },
    phone: { type: String }
}, { timestamps: {} })

schema.pre('updateOne', async function () {
    this._diff = Diff(this.isNew, this._doc)
    console.log('entrou no else', this.diff)
})

schema.post('updateOne', async () => {

})

schema.methods.log = async data => {
    data.diff = {
        before: this._original,
        after: this._diff
    }

    return await LogSchema.create(data)
}

console.log(...schema.s.hooks._posts)
/**
 * Proposal is a mongoose model
 * @memberof module:resources/final
 */
const Proposal = model('proposal', schema)

module.exports = Proposal
