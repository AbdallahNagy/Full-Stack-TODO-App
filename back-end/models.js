const mongoose = require('mongoose')

// schemas
const todoSchema = new mongoose.Schema({
    "title": String,
    "status": {
        "type": String,
        "enum": ["todo", "in-progress", "done"]
    },
    "list_id": String
})

const listsSchema = new mongoose.Schema({
    "title": String
})

const userSchema = new mongoose.Schema({
    "username": String,
    "email": String,
    "password": String
})

// models
const Todo = new mongoose.model('Todo', todoSchema)
const User = new mongoose.model('User', userSchema)
const List = new mongoose.model('List', listsSchema)

module.exports = {
    Todo,
    User,
    List
}