/**
 * This function defaults to return errors
 * @memberof module:utils
 * @param {Object | Object[]} error - is a object or array of errors
 * @returns {Object}
 * @example
 * return {
 *   errors: {
 *      params: ['name'],
 *         messages: [`name is necessary to register`]
 *     }
 *  }
 *
 */
exports.FormatError = (error) => {
    if (Array.isArray(error)) {
        return {
            errors: {
                params: error.map(item => item.param).filter((item, index, array) => array.indexOf(item) === index),
                messages: error.map(item => item.msg)
            }
        }
    }

    if (error.name === 'Error') {
        return {
            errors: {
                params: [],
                messages: [error.message]
            }
        }
    }

    return {
        errors: {
            params: error.path ? [error.path] : [],
            messages: [`Unexpected value "${error.value}" in "${error.path}"`]
        }
    }
}
