const { LogSchema } = require('./schema')
const { Diff } = require('../../utils')

const pluginLog = function (schema) {

    let before
    let after

    schema.pre('findOneAndUpdate', async function () {
        before = await this.findOne(this._conditions).exec()
        let new_data = await this.model(this._update)
        new_data = new_data.toObject({ transform: false })
        new_data._id = before._id
        after = Diff(new_data, before)
    })

    schema.methods.log = function (data) {
        data.diff = {
            before,
            after
        }

        return LogSchema.create(data)
    }
}

exports.pluginLog = pluginLog
