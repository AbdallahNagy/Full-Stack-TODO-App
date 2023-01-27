const express = require('express')
const listRouter = express.Router()

const { List } = require('../models')

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

module.exports = listRouter