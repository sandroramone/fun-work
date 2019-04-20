const { body, validationResult } = require('express-validator/check')

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
        .exists().isNumeric(),

    body('name', 'name doesn\'t exists').exists(),

    body('email', 'Invalid email').optional().isEmail().normalizeEmail(),

    body('cpf', 'is invalid cpf')
        .optional()
        .custom(value => validatorCPF(value.replace(/\D/g, '')))
        .customSanitizer(sanitizecpf),

    body('birthdate', 'Birthdate is necessary')
        .exists(),

    body('birthdate', 'Invalid age, you must be between 18 and 65 years old').custom(validatorBirthday),

    body('phone').optional().exists()
]

const validation = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }
    next()
}

module.exports = {
    find: [],
    post: [validadeItemsPost(), validation],
    get: [],
    put: [],
    delete: []
}
