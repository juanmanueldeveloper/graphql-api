'use strict'

const studentsCtrl = require('../components/students/controller')

module.exports = {
    Course: {
        students: async ({ students }) => {
            const data = await studentsCtrl.getPeople(students)
            return data
        }
    },
    Person: {
        __resolveType: (person, context, info) => {
            if(person.phone){
                return 'Monitor'
            }

            return 'Student'
        }
    }
}