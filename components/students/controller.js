'use strict'

const store = require('./store')

const addStudent = (student) => {
  return new Promise((resolve, reject) => {
    if (!student) {
      reject('Invalid Data')
    } else {
      resolve(store.add(student))
    }
  })
}

const getStudents = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list())
  })
}

const getStudent = (id) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(id))
  })
}

const updateStudent = (id, student) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !student) {
      reject('La datos son incorrectos')
    } else {
      const result = await store.update(id, student)
      resolve(result)
    }
  })
}

const deleteStudent = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Data Invalid')
    } else {
      const result = await store.delete(id)
      resolve(result)
    }
  })
}

const getPeople = (ids) => {
  return new Promise(async (resolve, reject) => {
    let data = await store.getPeople(ids) 
     resolve(data)
  })
}

const searchStudents = (keyword) => {
  return new Promise(async (resolve, reject) => {
    let data = await store.search(keyword) 
     resolve(data)
  })
}

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
  getPeople,
  searchStudents
}
