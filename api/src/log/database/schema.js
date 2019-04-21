const { model, Schema } = require('mongoose')

const schema = new Schema({
    action: { type: String, required: true, index: true },
    category: { type: String, required: true },
    // createdBy: { type: ObjectId, ref: 'Account', required: true },
    message: { type: String, required: true },
    diff: { type: Schema.Types.Mixed },
}, { timestamps: {} })

exports.LogSchema = model('log', schema)
