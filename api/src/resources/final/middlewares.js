const { body, validationResult } = require('express-validator/check')
const Partial = require('../partial/schema')
const {
    isCpfValid,
    sanitizecpf,
    validatorPhone,
    existsOldProposal,
    isBirthdateValid
} = require('../../utils')

/**
 * Export resource final middlewares
 * @memberof module:resources/final
 */
module.exports = (model) => {

    const validadeItemsPost = () => [
        body('productId', 'productId doesn\'t exists or not a number')
            .exists().isNumeric().withMessage('productId must be a number'),

        body('name', 'Name doesn\'t exists').exists(),

        body('email', 'Invalid email').exists().isEmail().normalizeEmail(),

        body('cpf', 'Invalid cpf')
            .exists()
            .customSanitizer(sanitizecpf)
            .custom(isCpfValid),

        body('birthdate')
            .exists().withMessage('Birthdate is necessary')
            .custom(isBirthdateValid)
            .withMessage('Invalid age, you must be between 18 and 65 years old'),

        body('phone')
            .exists().withMessage('Phone number is necessary')
            .custom(validatorPhone).withMessage('Phone number incorrect')
    ]

    const validation = (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        next()
    }

    const validateProposal = async (req, res, next) => {
        const exists_old_proposal = await existsOldProposal(req.body.cpf, model)

        if (exists_old_proposal) {
            return res.status(400).json({
                erros: {
                    params: [],
                    messages: ['After a request, a same CPF can not have a new proposal for 90 days']
                }
            })
        } else {
            next()
        }
    }

    const removePartial = async (req, res, next) => {
        const { cpf } = req.body
        await Partial.remove({ cpf }).exec()
        next()
    }

    return {
        validationResult,
        find: [],
        post: [validateProposal, validadeItemsPost(), validation, removePartial],
        get: [],
        put: [],
        delete: []
    }
}
