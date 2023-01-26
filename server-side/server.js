require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
port = 3000

const todoRouter = require('./routers/todos.js')
const userRouter = require('./routers/users.js')

app.use(express.static('../dist/client'))
app.use(express.json())

app.use('/todos', todoRouter)
app.use('/users', userRouter)

// error middleware
app.use((err, req, res, next) => {
    if(!err.statusCode) err.message = 'something went wrong'
    res.status(err.statusCode || 500).send(err.message) 
})

mongoose.connect('mongodb://127.0.0.1:27017/db')
app.listen(port, () =>{
    console.log('SERVER CONNECTED ON PORT 3000')
})