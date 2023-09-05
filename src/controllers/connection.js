const mysql = require('mysql')

require('dotenv').config()

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
})

db.connect(err => {
    if(err) console.log(err)

    return console.log('conected mysql')
})

module.exports = db