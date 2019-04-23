const submodules = require('./submodules')

exports.ProcessArgsToBody = async (args, model) => {
    const body = {}
    const errors = []
    const promises = []

    Object.keys(submodules).forEach(key => {
        promises.push(submodules[key]({ args, body, errors, model }))
    })

    await Promise.all(promises)

    const result = {
        body: Object.assign({}, args, body),
        errors
    }

    return result
}
