const store = require('./store')

const addMessage = (chat, user, message, file) =>{
    return new Promise((resolve, reject) => {
        if(!chat || !user || !message){
            reject('La datos son incorrectos')
        }else{

            store.add(fullMessage)
            socket.io.emit('message', fullMessage)
            resolve(fullMessage)
        }
    })
}

const getCourses = () => {
    return new Promise((resolve, reject) =>{
        resolve(store.list())
    })
} 

const getCourse = (id) => {
    return new Promise((resolve, reject) =>{
        resolve(store.get(id))
    })
} 

const updateMessage = (id, message) =>{
    return new Promise(async (resolve, reject) => {
        if(!id || !message){
            reject('La datos son incorrectos')
        }else{
            const result = await store.update(id, message)
            resolve(result)
        }
    })
}

const deleteMessage = (id) =>{
    return new Promise(async (resolve, reject) => {
        if(!id){
            reject('La datos son incorrectos')
        }else{
            const result = await store.delete(id)
            resolve(result)
        }
    })
}

module.exports = {
    //addMessage,
    getCourses,
    getCourse
    //updateMessage,
    //deleteMessage
}