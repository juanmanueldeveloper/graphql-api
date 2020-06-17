'use strict'

const Model = require('./model')

const addCourse = (course) => {
  return new Promise(async (resolve, reject) => {
    const newCourse = new Model(course)
    resolve(newCourse.save())
  })
}

const listCourses = () => {
  return new Promise(async (resolve, reject) => {
    const courses = await Model.find()
    resolve(courses)
  })
}

const getCourse = (id) => {
  return new Promise(async (resolve, reject) => {
    const course = await Model.findOne({
      _id: id
    })

    resolve(course)
  })
}

const updateCourse = async (id, course) => {
  const foundCourse = await Model.findOne({
    _id: id
  })

  const data = Object.assign(foundCourse, course)

  const newCourse = await data.save()
  return newCourse
}

const deleteCourse = (id) => {
  return new Promise(async (resolve, reject) => {
    const result = await Model.deleteOne({
      _id: id
    })

    resolve(!!result.ok) // 1 = True Other = False
  })
}

const addStudentToCourse = (courseID, studentID) => {
  return new Promise(async (resolve, reject) => {
    const course = await Model.findOne({
      _id: courseID
    })

    if (!course) reject(false)

    const result = await Model.updateOne({
      _id: courseID
    },
    {
      $addToSet: { students: { _id: studentID } }
    })

    resolve(!!result.ok) // 1 = True Other = False
  })
}

const searchCourses = (keyword) => {
  return new Promise(async (resolve, reject) => {
    const courses = await Model.find({
      $text: { $search: keyword}
    })
    
    resolve(courses)
  })
}

module.exports = {
  list: listCourses,
  get: getCourse,
  add: addCourse,
  update: updateCourse,
  delete: deleteCourse,
  addPeople: addStudentToCourse,
  search: searchCourses
}
