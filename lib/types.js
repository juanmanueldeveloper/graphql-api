'use strict'

const studentsCtrl = require('../components/students/controller')

module.exports = {
    Course: {
        students: async ({ students }) => {
            const data = await studentsCtrl.getPeople(students)
            return data
        }
    }

}