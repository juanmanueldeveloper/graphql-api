'use strict'

const coursesCtrl = require('../components/courses/controller') 

module.exports = {
    Query : {
        getCourses: () => { 
            return coursesCtrl.getCourses()
        },
        getCourse: (root, args) => { 
            const course = coursesCtrl.getCourse(args.id)
            return course
        },
    }
}
