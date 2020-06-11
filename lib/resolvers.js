'use strict'

 const courses = [
     {
        _id: '12132322',
        title: 'Curso de prueba',
        teacher: 'Teacher 1',
        description: 'Es un curso de platzi',
        topic: 'Development'
     },
     {
        _id: '98238908093844289084',
        title: 'Curso de prueba 2',
        teacher: 'Teacher 2',
        description: 'Es un curso de platzi',
        topic: 'Development 2'
     }
    ]

module.exports = {
    Query : {
        getCourses: () => { 
            return courses
        },
        getCourse: (root, args) => { 
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        },
    }
}
