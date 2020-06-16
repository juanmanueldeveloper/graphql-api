'use strict'

const coursesCtrl = require('../components/courses/controller')
const studentsCtrl = require('../components/students/controller')

module.exports = {
  getCourses: () => {
    return coursesCtrl.getCourses()
  },
  getCourse: (root, args) => {
    const course = coursesCtrl.getCourse(args.id)
    return course
  },
  getStudents: () => {
    return studentsCtrl.getStudents()
  },
  getStudent: (root, args) => {
    const student = studentsCtrl.getStudent(args.id)
    return student
  }
}
