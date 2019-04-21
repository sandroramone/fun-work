const { LogSchema } = require('./schema')
const { Diff } = require('../../utils')

const pluginLog = function (schema) {

    schema.post('init', function (doc) {
        doc._original = doc.toObject({ transform: false })
    })

    schema.pre('updateOne', async function () {
        this._diff = Diff(this, this._original)
    })

    schema.methods.log = function (data) {
        data.diff = {
            before: this._original,
            after: this._diff
        }

        return LogSchema.create(data)
    }
}

exports.pluginLog = pluginLog
