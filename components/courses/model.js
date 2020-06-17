'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
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
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  students: [{
    type: Schema.ObjectId,
    ref: 'students'
  }],
  level: {
    type: String
  },
})

const model = mongoose.model('courses', mySchema)

module.exports = model
