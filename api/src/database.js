/** @module database */
const mongoose = require('mongoose')

// const { pluginLog } = require('./log/database/plugin.log')

mongoose.Promise = global.Promise
// mongoose.plugin(pluginLog)
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })

// eslint-disable-next-line no-console
mongoose.connection.on('open', () => console.log('Connected to MongoDB'))

// eslint-disable-next-line no-console
mongoose.connection.on('error', (err) => console.error(err))

/** Is a connection and config mongoose */
module.exports = mongoose
