const { isEmailvalid } = require('../../../utils')

exports.validateEmail = ({ args, errors }) => {
    if (args.email) {
        if (!isEmailvalid(args.email)) {
            errors.push({ param: 'email', message: 'email invalid' })
        }
    }
}
