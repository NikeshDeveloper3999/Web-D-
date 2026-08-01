
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')    
dotenv.config()
const jwt = require('jsonwebtoken')
const SessionModel = require('../Models/Session.model')

const JWT_SECRET = process.env.secret_key
const {sendEmail} = require('../Service/Email.service')
const {generateOtp, getOtpHtml} = require('../Utility/utilities')
const otpModel = require('../Models/Otp.model')



// signup without otp 
// async function Signup(req, res) {
//     try{

//     const { name, email, password } = req.body
    
//     if (!name || !email || !password) {
//         return res.status(400).json({ message: 'Please provide all required fields' })
//     }

//     if (await userModel.findOne({ email })) {
//         return res.status(409).json({ message: 'User already exists' })
//     } 

//     const salt = await bcrypt.genSalt(10) 
//     const hashedPassword = await bcrypt.hash(password, salt)

//     const user = await userModel.create({ name, email, password: hashedPassword})
    
//     const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' })

//     const refreshTokenHash = await bcrypt.hash(refreshToken, salt)  


// // creating session   in session we store user id and refresh token in bcrypt form


// const session = await SessionModel.create({ 
//     user: user._id,
//     refreshToken: refreshTokenHash ,
//     ip: req.ip,
//     userAgent: req.headers['user-agent'],
//     revoked: false,
//     })



//     const accessToken = jwt.sign({id : user._id  , sessionId : session._id }  , JWT_SECRET ,{ expiresIn : '15m'})

//     res.cookie('refreshToken', refreshToken, { 
//                             httpOnly: true,  // Access through JavaScript is not allowed 
//                             secure: true,
//                             sameSite: 'strict'  ,
//                             maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
//                             })





//     res.status(201).json({  message : 'User signup successfully',user,accessToken})
// }
// catch (error) {
//         console.log(error)
//         return res.status(500).json({ message: 'Internal Server Error' })
// }
// }
 

async function Signup(req, res) {
    try{

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
    
await sendEmail({to: email, subject: 'Verify your email', text: 'Please verify your email'})

    res.status(201).json({  message : 'User signup successfully', user: {username: user.name , email: user.email , verified: user.verified}  })
}
catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' })
}
}




async function login(req, res) {
    try {
    const { email, password } = req.body
    
    if (!email || !password) {return res.status(400).json({ message: 'Please provide all required fields' })}
    const user = await userModel.findOne({ email  })

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }


    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' })
    }

    const salt = await bcrypt.genSalt(10)

const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' })
const refreshTokenHash = await bcrypt.hash(refreshToken, salt)

const session = await SessionModel.create({ 
    user: user._id,
    refreshToken: refreshTokenHash ,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    revoked: false,
    })

    const accessToken = jwt.sign({ id: user._id  , sessionId : session._id }, JWT_SECRET, { expiresIn: '15m' })

    
    res.cookie('refreshToken', refreshToken, { 
                            httpOnly: true,  // Access through JavaScript is not allowed 
                            secure: true,
                            sameSite: 'strict'  ,
                            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
                            })
    
    res.status(200).json({ message: 'Login successful', user: user, accessToken: accessToken })



    }



    catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
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

        const session = await SessionModel.findOne({ user : decoded.id, revoked: false });

        if (!session) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }
        const salt = await bcrypt.genSalt(10);

        const refreshTokenHash = await bcrypt.hash(refreshToken, salt);
    
        
        const accessToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '15m' });
        
        const newRefreshToken = jwt.sign({ id: decoded.id }, JWT_SECRET, { expiresIn: '7d' });
        
        await session.save();
        res.cookie('refreshToken', newRefreshToken, { 
            httpOnly: true,  // Access through JavaScript is not allowed 
                            secure: true,
                            sameSite: 'strict'  ,
                            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
                        })  
                        

        const newRefreshTokenHash = await bcrypt.hash(newRefreshToken, salt);
        session.refreshToken = newRefreshTokenHash;
        await session.save();

        res.status(200).json({ message: 'Access token generated successfully', accessToken });
    }
    catch (error) {
        console.log(error)
        return res.status(401).json({ message: 'Invalid token' })
    }
}


async function logout (req, res ) {
    try {
        
const refreshToken = req.cookies.refreshToken

if (!refreshToken) {   return res.status(401).json({ message: 'Refresh token not found' })}
const salt = await bcrypt.genSalt(10)

const refreshTokenHash = await bcrypt.hash(refreshToken, salt)

console.log('Refresh token:', refreshToken)

const session = await SessionModel.findOne({ refreshToken: refreshTokenHash, revoked: false })
if(!session){
    return res.status(401).json({ message: 'Invalid refresh token' })
}

session.revoked = true // Mark the session as revoked update
await session.save() // Save the updated session
res.clearCookie('refreshToken')

return res.status(200).json({ message: 'Logout successful' })



    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}


async function logoutAll (req, res ) {
    try {
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) {   return res.status(401).json({ message: 'Refresh token not found' })}

      const decoded  =jwt.verify(refreshToken, JWT_SECRET)
  
    await SessionModel.updateMany({ user: decoded.id  , revoked: false }, { revoked: true });
res.clearCookie('refreshToken')
return res.status(200).json({ message: 'Logout successful for all devices' })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}








module.exports = { Signup  , GetMe , refreshToken  , login , logout , logoutAll }
