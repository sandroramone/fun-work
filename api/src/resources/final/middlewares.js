const { body, validationResult } = require('express-validator/check')

/**
 * Export resource final middlewares
 * @memberof module:resources/final
 */
module.exports = (model) => {
    const validatorCPF = cpf => {
        let numeros, digitos, soma, i, resultado, digitos_iguais
        digitos_iguais = 1


        if (cpf.length < 11) {
            return false
        }

        for (i = 0; i < cpf.length - 1; i++) {
            if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
                digitos_iguais = 0
                break
            }
        }


        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9)
            digitos = cpf.substring(9)
            soma = 0
            for (i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

            if (resultado !== parseInt(digitos.charAt(0))) {
                return false
            }
            numeros = cpf.substring(0, 10)
            soma = 0
            for (i = 11; i > 1; i--) {
                soma += numeros.charAt(11 - i) * i
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11

            if (resultado !== parseInt(digitos.charAt(1))) {
                return false
            }
            return true
        }
        else {
            return false
        }
    }

    const sanitizecpf = cpf => cpf.replace(/\D/g, '')

    const validatorBirthday = birthday => {
        const dateStart = new Date(birthday)
        const dateEnd = new Date()

        let years_old = dateEnd.getFullYear() - dateStart.getFullYear()

        if (
            dateEnd.getMonth() < dateStart.getMonth() ||
            dateEnd.getMonth() < dateStart.getMonth() &&
            dateEnd.getDate() < dateStart.getDate()
        )
            --years_old

        return years_old >= 18 && years_old <= 65 ? true : false
    }

    const validadeItemsPost = () => [
        body('productId', 'productId doesn\'t exists or not a number')
            .exists().isNumeric().withMessage('productId must be a number'),

        body('name', 'Name doesn\'t exists').exists(),

        body('email', 'Invalid email').exists().isEmail().normalizeEmail(),

        body('cpf', 'Invalid cpf')
            .exists()
            .custom(value => validatorCPF(value.replace(/\D/g, '')))
            .customSanitizer(sanitizecpf),

        body('birthdate')
            .exists().withMessage('Birthdate is necessary')
            .custom(validatorBirthday)
            .withMessage('Invalid age, you must be between 18 and 65 years old'),

        body('phone').exists().withMessage('Phone number is necessary')
    ]

    const validation = (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() })
        }
        next()
    }

    const validateOldProposal = async (req, res, next) => {
        // ms in minutes * minutes in hour * hours in day * 90 days
        const days = 60000 * 60 * 24 * 90
        const dateLimit = new Date(new Date().getTime() - days)
        const query = {
            cpf: req.body.cpf,
            createdAt: { $gte: dateLimit.toISOString() }
        }

        const count = await model.countDocuments(query).exec()

        if (count > 0) {
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

    return {
        find: [],
        post: [validateOldProposal, validadeItemsPost(), validation],
        get: [],
        put: [],
        delete: []
    }
}
