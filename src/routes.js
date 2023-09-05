const express = require('express')
const tasksControllers = require('./controllers/tasksControllers')

const routes = express.Router()

routes.get('/tasks', tasksControllers.getTasks)

routes.post('/register-task', tasksControllers.setTasks)

routes.put('/update-task', tasksControllers.updateTasks)

routes.delete('/delete-task', tasksControllers.deleteTasks)

module.exports = routes