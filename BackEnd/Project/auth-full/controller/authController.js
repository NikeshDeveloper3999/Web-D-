
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')    
dotenv.config()
const JWT_SECRET = process.env.secret_key

const jwt = require('jsonwebtoken')

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

    const user = await userModel.create({ name, email, password: hashedPassword})
    
    const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' })


    let token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' })  // expires in 1 day

    res.cookie('refreshToken', refreshToken, { 
                            httpOnly: true,  // Access through JavaScript is not allowed 
                            secure: true,
                            sameSite: 'strict'  ,
                            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
                            })

 
    res.status(201).json({  message : 'User signup successfully',user,token})
}


async function GetMe(req, res) {
    try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Authorization token not found' })
    }

       const decoded = jwt.verify(token, JWT_SECRET)
       const user = await userModel.findById(decoded.id);
       console.log(  'user data ' + user)

       res.status(200).json({ message: 'User details fetched successfully', name : user.name , email : user.email })
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Invalid token' })
    }
}



async function refreshToken(req, res) {
    try {
    
    const refreshToken = req.cookies.refreshToken

        if (!refreshToken) {   return res.status(401).json({ message: 'Refresh token not found' })}

        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const accessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '15m' });

        const newRefreshToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '7d' });
        
        res.cookie('refreshToken', newRefreshToken, { 
                            httpOnly: true,  // Access through JavaScript is not allowed 
                            secure: true,
                            sameSite: 'strict'  ,
                            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
                            })  

        res.status(200).json({ message: 'Access token generated successfully', accessToken });
    }
    catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Invalid token' })
    }
}

module.exports = { Signup  , GetMe , refreshToken }
