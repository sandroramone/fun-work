/**
 * @typedef produce
 * @type {Object}
 * @memberof module:utils
 * @property {Boolean} error - is true if it is not possible to
 * convert the string object and false if it is conveyed
 * @property {Object} result - is a parser of string to object
 */

/**
 * Check if it is possible to convert a string to an object,
 * if it is possible convert and retake object as result and
 * false error if it does not return error true and result null
 * @memberof module:utils
 * @param {String} str - string in json format to be converted to object
 * @returns {produce}
 */
exports.IsJsonString = (str) => {
    let result = null
    try {
        result = JSON.parse(str)
    } catch (e) {
        return { error: true, result: null }
    }
    return { error: false, result }
}
