const { isCpfValid, sanitizecpf, existsOldProposal } = require('../../../utils')

exports.validateAndSanitizeCpf = async ({ args, body, errors, model }) => {
    if (args.cpf) {
        body.cpf = sanitizecpf(args.cpf)

        if (isCpfValid(body.cpf)) {
            const old_proposal = await existsOldProposal(body.cpf, model)
            console.log('chamou aqui =>>>>>>>>>>>>>>>>>>>>>>>>>>>> count = %s', old_proposal)
            if (old_proposal) {
                console.log('entrou aqui')
                errors.push({
                    param: 'cpf',
                    message: 'After a request, a same CPF can not have a new proposal for 90 days'
                })
            }
        } else {
            errors.push({ param: 'cpf', message: 'invalid cpf' })
        }
        delete args.ids
    }
}
