const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const util = require('util')

const signAsync = util.promisify(jwt.sign)
const verifyAsync = util.promisify(jwt.verify)

const customError = require('./ErrorHandling')

const secretKey = process.env.SECRET_KEY || "kdeimco"

const comparePasswd = async (password, hash) => {
    const isMathc = await bcrypt.compare(password, hash)
    if (!isMathc) throw customError(401, 'invalid email or password')
}

const signUserToken = (id) =>
    signAsync({ id }, secretKey)

// (middleware) verify authorize user 
const authorizeUser = async (req, res, next) => {
    const { id } = req.params
    const { authorization: token} = req.headers
    
    try {
        // if all good it will return payload
        // otherwise will throw error
        const payload = await verifyAsync(token, secretKey)
        console.log(payload)
        if(payload.id !== id) throw Error('')
        next()

    } catch (error) {
        next(customError(403, 'unauthorized'))
    }
}
//63d0c6effeeee87e00b2f14b
//63d17122071c319f17e64984

module.exports = {
    comparePasswd,
    signUserToken,
    authorizeUser
}