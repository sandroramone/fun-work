const submodules = require('./submodules')

const ProcessArgsToQuery = (args) => {
    const query = {}

    Object.keys(submodules).forEach(key => {
        submodules[key](args, query)
    })

    return Object.assign({}, args, query)
}

module.exports = {
    ProcessArgsToQuery
}
