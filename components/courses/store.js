const Model = require('./model')


const addCourse = (message) => {
    const myMessage = new Model(message);
    myMessage.save()
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

const UpdateCourse = async (id, message) => {
    const foundMessage = await Model.findOne({
        _id : id
    })

    foundMessage.message = message
    const newMessage = await foundMessage.save()
    return newMessage
}

const deleteCourse = async (id) =>{
    return Model.deleteOne({
        _id : id
    })
}


module.exports = {
    //add :addCourse,
    list: listCourses,
    get: getCourse,
    //update: UpdateCourse,
    //delete: deleteCourse
}