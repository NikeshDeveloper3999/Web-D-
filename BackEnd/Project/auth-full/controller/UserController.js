
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')


async function Signup(req, res) {
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields' })
    }

    if (await userModel.findOne({ email })) {
        return res.status(409).json({ message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10) 
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await userModel.create({ name, email, password: hashedPassword })
    res.status(201).json({ user })
}


module.exports = { Signup }
