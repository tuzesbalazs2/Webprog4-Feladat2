const mongoose = require('mongoose')
const dburi = require("../config/database").mongoURI;

mongoose
    .connect(dburi, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db