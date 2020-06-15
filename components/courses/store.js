'use strict'

const Model = require('./model')


const addCourse = (course) => {
    return new Promise(async (resolve, reject) =>{
        const newCourse = new Model(course);
        resolve(newCourse.save())
    })

}

const listCourses = () => {
    return new Promise(async (resolve, reject) =>{
        const courses = await Model.find()
        resolve(courses)
    })
}

const getCourse = (id) => {
    return new Promise(async (resolve, reject) =>{
        const course = await Model.findOne({
            _id : id
        })
              
        resolve(course)
    })
}

const updateCourse = async (id, course) => {
    let foundCourse = await Model.findOne({
        _id : id
    })

    let data = Object.assign(foundCourse,course)

    const newCourse = await data.save()
    return newCourse
}

const deleteCourse = (id) =>{
    return new Promise(async (resolve, reject) =>{
        const deletedStudent = await  Model.deleteOne({
            _id : id
        })

        resolve(deletedStudent.ok ? true : false) // 1 = True Other = False
    })
}


module.exports = {
    list: listCourses,
    get: getCourse,
    add :addCourse,
    update: updateCourse,
    delete: deleteCourse
}