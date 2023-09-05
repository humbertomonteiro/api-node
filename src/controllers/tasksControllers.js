const db = require('./connection')

const getTasks = async (req, res) => {
    await db.query('select * from crud.tasks', (err, result) => {
        if(err) throw err

        return res.status(200).json(result)
    })
}

const setTasks = async (req, res) => {

    const q = `
    insert into crud.tasks 
    (task, situation) 
    values 
    ('${req.body.task}', '${req.body.situation}')`

    await db.query(q, (err, result) => {
        if(err) throw err

        return res.status(200).json(result)
    })
}

const updateTasks = async (req, res) => {

    const q = `
    update crud.tasks 
    set task = '${req.body.task}',
        situation = '${req.body.situation}'
    where 
    id = '${req.body.id}'`

    await db.query(q, (err, result) => {
        if(err) throw err

        return res.status(200).json(result)
    })
}

const deleteTasks = async (req, res) => {

    const q = `
    delete from crud.tasks 
    where id = '${req.body.id}'`

    await db.query(q, (err, result) => {
        if(err) console.log(err)

        return res.status(200).json(result)
    })
}

module.exports = {
    getTasks,
    setTasks,
    updateTasks,
    deleteTasks
}