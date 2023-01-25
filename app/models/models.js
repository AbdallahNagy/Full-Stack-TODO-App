const mongoose = require('mongoose')

// schemas
const todoSchema = new mongoose.Schema({
    "title": String,
    "status": {
        "type": String,
        "enum": ["todo", "in-progress", "done"]
    }
})

const userSchema = new mongoose.Schema({
    "username": String,
    "email": String,
    "password": String    
})

// models
const Todo = new mongoose.model('Todo', todoSchema)
const User = new mongoose.model('User', userSchema)

module.exports ={
    Todo,
    User
}