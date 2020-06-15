'use strict'

const Model = require('./model')


const addStudent = (student) => {
    return new Promise(async (resolve, reject) =>{
        const newStudent = new Model(student);
        resolve(newStudent.save())
    })

}

const listStudent = () => {
    return new Promise(async (resolve, reject) =>{
        const student = await Model.find()
        resolve(student)
    })
}

const getStudent = (id) => {
    return new Promise(async (resolve, reject) =>{
        const student = await Model.findOne({
            _id : id
        })
              
        resolve(student)
    })
}

const updateStudent = (id, student) => {
    return new Promise(async (resolve, reject) =>{
        let foundStudent= await Model.findOne({
            _id : id
        })
    
        let data = Object.assign(foundStudent, student)
        const newStudent = await data.save()
    
         resolve(newStudent)
    })

}

const deleteStudent = (id) =>{
    return new Promise(async (resolve, reject) =>{
        const deletedStudent = await  Model.deleteOne({
            _id : id
        })

        resolve(deletedStudent.ok ? true : false) // 1 = True Other = False
    })
}


module.exports = {
    list: listStudent,
    get: getStudent,
    add : addStudent,
    update: updateStudent,
    delete: deleteStudent
}