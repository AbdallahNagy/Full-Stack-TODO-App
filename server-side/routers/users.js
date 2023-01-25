const express = require('express')
const userRouter = express.Router()

const bcrypt = require('bcrypt')
const { User } = require('../models')
const { userValidation } = require('../validations')
const { comparePasswd, signUserToken, authorizeUser } = require('../userHelpers')
const customError = require('../ErrorHandling')

// verify authorize user

// login
userRouter.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if(!email || !password) throw customError(401, 'missing email or password')
        
        const user = await User.findOne({email})
        if(!user) throw customError(401, 'invalid email or password')

        await comparePasswd(password, user.password)

        const token = await signUserToken(user._id)
        res.status(200).send({accessToken: token})
    
    } catch (error) {
        next(error)
    }
})

//create user
userRouter.post('/', userValidation, async (req, res, next) => {
    try {
        const { username, email, password } = req.body
        const hashedPasswd = await bcrypt.hash(password, 7)
        const user = {
            username,
            email,
            password: hashedPasswd
        }

        const createdUser = await User.create(user)

        const token = await signUserToken(createdUser._id)
        res.status(200).send({accessToken: token})

    } catch (err) {
        next(err)
    }
})

//get all users
userRouter.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        res.send(users)

    } catch (err) {
        res.next(err)
    }
})

// get user by id
userRouter.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        res.send(user)

    } catch (error) {
        next(error)
    }

})

// edit user by id
userRouter.patch('/:id', userValidation, authorizeUser, async (req, res, next) => {
    try {
        const { id } = req.params
        const { username, email, password } = req.body
        const hashedPasswd = await bcrypt.hash(password, 7)

        const user = {
            username,
            email,
            password: hashedPasswd
        }
        await User.findByIdAndUpdate(id, user)
        res.send(user)

    } catch (error) {
        next(error)
    }
})

//delete user by id
userRouter.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.send('done')

    } catch (error) {
        next(error)
    }
})

module.exports = userRouter