const { validatorPhone } = require('../../../utils')

exports.validatePhone = ({ args, errors }) => {
    if (args.phone) {
        if (!validatorPhone(args.phone)) {
            errors.push({ param: 'phone', message: 'phone invalid' })
        }
    }
}
