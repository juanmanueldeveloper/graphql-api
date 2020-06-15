'use strict'

const mongoose = require('mongoose')

const schema = mongoose.Schema

const mySchema = new schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const model = mongoose.model('students', mySchema)

module.exports = model