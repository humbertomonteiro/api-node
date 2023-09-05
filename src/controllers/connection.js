const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'doido97',
    database: 'crud'
})

db.connect(err => {
    if(err) console.log(err)

    return console.log('conected mysql')
})

module.exports = db