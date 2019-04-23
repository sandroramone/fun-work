const { isCpfValid, sanitizecpf, existsOldProposal } = require('../../../utils')

exports.validateAndSanitizeCpf = async ({ args, body, errors, model }) => {
    if (typeof args.cpf === 'string') {
        body.cpf = sanitizecpf(args.cpf)

        if (isCpfValid(body.cpf)) {
            if (model) {
                if (await existsOldProposal(body.cpf, model)) {
                    errors.push({
                        param: 'cpf',
                        message: 'After a request, a same CPF can not have a new proposal for 90 days'
                    })
                }
            }
        } else {
            errors.push({ param: 'cpf', message: 'invalid cpf' })
        }
        delete args.ids
    }
}
