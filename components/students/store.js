'use strict'

const Model = require('./model')

const addStudent = (student) => {
  return new Promise(async (resolve, reject) => {
    const newStudent = new Model(student)
    resolve(newStudent.save())
  })
}

const listStudent = () => {
  return new Promise(async (resolve, reject) => {
    const student = await Model.find()
    resolve(student)
  })
}

const getStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    const student = await Model.findOne({
      _id: id
    })

    resolve(student)
  })
}

const updateStudent = (id, student) => {
  return new Promise(async (resolve, reject) => {
    const foundStudent = await Model.findOne({
      _id: id
    })

    const data = Object.assign(foundStudent, student)
    const newStudent = await data.save()

    resolve(newStudent)
  })
}

const deleteStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    const deletedStudent = await Model.deleteOne({
      _id: id
    })

    resolve(!!deletedStudent.ok) // 1 = True Other = False
  })
}

const getPeople = (ids) => {
  let students
  return new Promise(async (resolve, reject) => {
    students = ids.length > 0 ? await Model.find({ _id: { $in: ids } }) : []

    resolve(students)
  })
}

module.exports = {
  list: listStudent,
  get: getStudent,
  add: addStudent,
  update: updateStudent,
  delete: deleteStudent,
  getPeople
}
