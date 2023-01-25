const Joi = require('joi')

const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        // .required()
        .email(),

    password: Joi.string()
        .required()
})

const userValidation = async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    } catch (error) {
        error.statusCode = 422
        next(error)
    }
}

module.exports = {
    userValidation
}