const express = require('express')
const listRouter = express.Router()

const { List } = require('../models')

// create list
listRouter.post('/', async (req, res, next) => {
    try {
        const { title } = req.body

        const list = new List({
            title
        })

        await list.save()
        res.send(list)

    } catch (error) {
        next(error)
    }
})

//get all lists
listRouter.get('/', async (req, res, next) => {
    try {
        const lists = await List.find({})
        res.send(lists)

    } catch (error) {
        next(error)
    }
})

// edit list by id 
listRouter.patch('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const { title } = req.body

        const updatedList = {
            title
        }

        await List.findByIdAndUpdate(id, updatedList)
        res.send('updated successfully')

    } catch (error) {

    }
})

// delete list by id
listRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params

        await List.findByIdAndDelete(id)
        res.send('deleted successfully')

    } catch (error) {

    }
})

module.exports = listRouter