'use strict'

const coursesCtrl = require('../components/courses/controller')
const studentsCtrl = require('../components/students/controller')

module.exports = {
  getCourses: async () => {
    const courses = await  coursesCtrl.getCourses()
    return courses
  },
  getCourse: async (root, args) => {
    const course = await coursesCtrl.getCourse(args.id)
    return course
  },
  getPeople: async () => {
    const students = await studentsCtrl.getStudents()
    return students
  },
  getPerson: async (root, args) => {
    const student = await studentsCtrl.getStudent(args.id)
    return student
  },
  searchItems: async (root, { keyword }) => {
    let items
    const courses =  await coursesCtrl.searchCourses(keyword)    
    const students = await studentsCtrl.searchStudents(keyword)

    items = [...courses, ...students]
    return items
  }
}
