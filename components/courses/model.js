'use strict'

const mongoose = require('mongoose')

const schema = mongoose.Schema

const mySchema = new schema({
    title: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    topic: {
        type: String,
        required: true,
    },
    students: [{
        type: schema.ObjectId,
        ref: 'students',
    }],
})

const model = mongoose.model('courses', mySchema)

module.exports = model