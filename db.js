const db = require('mongoose')

db.Promise = global.Promise

const connect = async (conectionString) => {
    await db.connect(conectionString, {
        useNewUrlParser : true,
        useUnifiedTopology: true
    })
    .then((resolve) => {
        console.log('[DB] Success contected')
    })
    .catch((reject) => {
        console.log(`[DB] fail contected ${reject}`)
    })
}

module.exports = connect