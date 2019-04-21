const { isEqual, isObject, transform } = require('lodash')

/**
 * processes diff between json files
 * @memberof module:utils
 */
exports.Diff = (current, previous) => {
    function changes(object, base) {
        return transform(object, (res, val, key) => {
            if (!isEqual(val, base[key]))
                res[key] = isObject(val) && isObject(previous[key]) ?
                    this.Diff(val, previous[key]) : val
        })
    }

    return changes(current, previous)
}
