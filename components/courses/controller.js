'use strict'

const store = require('./store')

const addCourse = (course) => {
  return new Promise((resolve, reject) => {
    if (!course) {
      reject('Invalid Data')
    } else {
      resolve(store.add(course))
    }
  })
}

const getCourses = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

const getCourse = (id) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(id))
  })
}

const updateCourse = (id, course) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !course) {
      reject('La datos son incorrectos')
    } else {
      const result = await store.update(id, course)
      resolve(result)
    }
  })
}

const deleteCourse = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Data Invalid')
    } else {
      const result = await store.delete(id)
      resolve(result)
    }
  })
}

const addPeople = (courseID, studentID) => {
  return new Promise((resolve, reject) => {
    if (!courseID || !studentID) {
      reject('Invalid Data')
    } else {
      resolve(store.addPeople(courseID, studentID))
    }
  })
}

const searchCourses = (keyword) => {
  return new Promise((resolve, reject) => {
    resolve(store.search(keyword))
  })
}

module.exports = {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
  addPeople,
  searchCourses
}
