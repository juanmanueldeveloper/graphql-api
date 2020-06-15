'use strict'

const coursesCtrl = require('../components/courses/controller') 
const studentsCtrl = require('../components/students/controller') 

module.exports = {
    createCourse : async (root, { input }) => {
        const course = await coursesCtrl.addCourse(input)
        return course
    },
    editCourse : async (root, { _id, input }) => {
        const course = await coursesCtrl.updateCourse(_id, input)
        return course
    },
    deleteCourse : async (root, { _id }) => {
        const course = await coursesCtrl.deleteCourse(_id)
        return course
    },
    createStudent : async (root, { input }) => {
        const student = await studentsCtrl.addStudent(input)
        return student
    },
    editStudent : async (root, { _id, input }) => {
        const student = await studentsCtrl.updateStudent(_id, input)
        return student
    },
    deleteStudent : async (root, { _id }) => {
        const student = await studentsCtrl.deleteStudent(_id)
        return student
    },
    addPeople : async (root, { courseID, studentID }) => {
        const data = await coursesCtrl.addPeople(courseID, studentID)
        return data
    }
}