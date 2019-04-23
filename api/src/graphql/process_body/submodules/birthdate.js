const { isBirthdateValid } = require('../../../utils')

exports.validateBirthdate = ({ args, errors }) => {
    if (args.birthdate) {
        if (!isBirthdateValid(args.birthdate)) {
            errors.push({
                param: 'birthdate',
                message: 'Invalid age, you must be between 18 and 65 years old'
            })
        }
    }
}
