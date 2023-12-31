const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

module.exports = app