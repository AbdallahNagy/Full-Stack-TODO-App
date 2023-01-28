const express = require('express')
const todoRouter = express.Router()

const { Todo } = require('../models')

//create todo by list id
todoRouter.post('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, status } = req.body

        const todoItem = new Todo({
            title,
            status,
            list_id: id
        })
        await todoItem.save()
        res.send(todoItem)

    } catch (err) {
        next(err)
    }
})

// get all todos by list id
todoRouter.get('/listId/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        const todos = await Todo.find({ list_id: id })
        res.send(todos)

    } catch (error) {
        next(error)
    }

})

//create todo
todoRouter.post('/', async (req, res, next) => {
    try {
        const { title, status } = req.body
        const todoItem = new Todo({
            title,
            status,
            list_id
        })
        await todoItem.save()
        res.send(todoItem)

    } catch (err) {
        next(err)
    }
})

//get all todos
todoRouter.get('/', async (req, res, next) => {
    try {
        const allTodos = await Todo.find({})
        res.send(allTodos)

    } catch (err) {
        res.next(err)
    }
})

// get todo by id
todoRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const todoItem = await Todo.find({ "_id": id })
        res.send(todoItem)
    } catch (error) {
        next(error)
    }

})

// edit todo by id
todoRouter.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { title, status } = req.body
        const todoItem = {
            title,
            status
        }
        const query = await Todo.updateOne({ "_id": id }, todoItem)
        res.send(query)

    } catch (error) {
        next(error)
    }
})

//delete todo by id
todoRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const query = await Todo.deleteOne({ "_id": id })
        res.send(query)

    } catch (error) {
        next(error)
    }
})

module.exports = todoRouter