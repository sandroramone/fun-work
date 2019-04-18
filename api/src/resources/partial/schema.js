const { model, Schema } = require('mongoose')

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
    productId: { type: Number },
    name: { type: String },
    email: { type: String },
    cpf: { type: String },
    birthdate: { type: Date },
    phone: { type: String }
})

module.exports = model('piece', schema)
