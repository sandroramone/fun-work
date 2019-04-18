const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
const db = mongoose.connection

db.on('open', () => console.log('Connected to MongoDB'))

db.on('error', (err) => console.log(err))

module.exports = mongoose
