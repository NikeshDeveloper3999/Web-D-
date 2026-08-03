
const userModel = require('../Models/userModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv')    
dotenv.config()
const jwt = require('jsonwebtoken')
const SessionModel = require('../Models/Session.model')

const JWT_SECRET = process.env.secret_key
const {sendEmail} = require('../Service/Email.service')
const utilities = require('../Utility/utilities')
const otpModel = require('../Models/Otp.model')
const passwordResetModel = require('../Models/PasswordReset.model')

const SALT_ROUNDS = bcrypt.genSalt(10)

/*
  signup without otp 
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
    
    const refreshToken = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' })

    const refreshTokenHash = await bcrypt.hash(refreshToken, salt)  


// creating session   in session we store user id and refresh token in bcrypt form


const session = await SessionModel.create({ 
    user: user._id,
    refreshToken: refreshTokenHash ,
    ip: req.ip,
    userAgent: req.headers['user-agent'],
    revoked: false,
    })



    const accessToken = jwt.sign({id : user._id  , sessionId : session._id }  , JWT_SECRET ,{ expiresIn : '15m'})

    res.cookie('refreshToken', refreshToken, { 
                            httpOnly: true,  // Access through JavaScript is not allowed 
                            secure: true,
                            sameSite: 'strict'  ,
                            maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days  
                            })





    res.status(201).json({  message : 'User signup successfully',user,accessToken})
}
catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error' })
}
}
 */

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

    const otp = utilities.generatedOtp()
    const otpHtml = utilities.getotphtml(otp) 
    const otpHash = await bcrypt.hash(otp, salt)
    await otpModel.create({ email, user: user._id, otpHash })

    try{
        
        await sendEmail({to: email, subject: ' OTP verification', text: 'Your OTP code is ' + otp, html: otpHtml})
    }catch(mailerr){  
                  console.error('Failed to send OTP email:', mailerr)}

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

    if (!user.verified) {
        return res.status(401).json({ message: 'Email is not verified' })
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
       if (!user) {return res.status(404).json({ message: 'User not found' })}

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

const decoded = jwt.verify(refreshToken, JWT_SECRET)

const session = await SessionModel.findOne({ _id: decoded.sessionId, revoked: false })
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
async function verifyemail(req, res) {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                message: "Please provide all required fields",
            });
        }

        const otpData = await otpModel.findOne({ email });

        if (!otpData) {
            return res.status(401).json({
            message: "OTP not found or expired",
            });
        }

        const isMatch = await bcrypt.compare(otp, otpData.otpHash);

        if (!isMatch) {return res.status(401).json({message: "Invalid OTP",});}

        const user = await userModel.findById(otpData.user);
        if (!user) {return res.status(404).json({message: "User not found",});}

        user.verified = true;
        await user.save();
        await otpModel.deleteMany({ _id: otpData._id });

        return res.status(200).json({
            message: "Email verified successfully",
            user: {
                username: user.name,
                email: user.email,
                verified: user.verified,
            },
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Internal Server Error",});
    }
}

async function forgotPassword(req, res) {
    try {
        const { email } = req.body
        if (!email) {
            return res.status(400).json({ message: 'Please provide an email' })
        }
 
        const user = await userModel.findOne({ email })
 
        // Always return the same response whether or not the account exists —
        // otherwise this endpoint becomes a way to enumerate registered emails.
        const genericResponse = { message: 'If an account exists for this email, a reset code has been sent.' }
 
        if (!user) {
            return res.status(200).json(genericResponse)
        }
 
        
        const otp = utilities.generatedOtp()
        const otpHash = await bcrypt.hash(otp, SALT_ROUNDS)
 
        // Clear any earlier unused reset requests for this email so old
        // codes can't be replayed alongside the new one.
        await passwordResetModel.deleteMany({ email })
        await passwordResetModel.create({ email, user: user._id, otpHash })
 
        try {
            await sendEmail({
                to: email,
                subject: 'Password reset code',
                text: `Your password reset code is ${otp}. It expires in 10 minutes.`,
                html: utilities.getotphtml(otp)
            })
        } catch (mailErr) {
            console.error('Failed to send password reset email:', mailErr)
            // Don't leak the failure to the client — same reasoning as above.
        }
 
        return res.status(200).json(genericResponse)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}
 
// ---------- Reset password using the OTP from forgotPassword ----------
async function resetPassword(req, res) {
    try {
        const { email, otp, newPassword } = req.body
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: 'Please provide all required fields' })
        }
 
        const resetRecord = await passwordResetModel.findOne({ email })
        if (!resetRecord) {
            return res.status(401).json({ message: 'Invalid or expired reset code' })
        }
 
        const isMatch = await bcrypt.compare(otp, resetRecord.otpHash)
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid or expired reset code' })
        }
 
        const user = await userModel.findById(resetRecord.user).select('+password')
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
 
        const sameAsOld = await bcrypt.compare(newPassword, user.password)
        if (sameAsOld) {
            return res.status(400).json({ message: 'New password must be different from your current password' })
        }
 
        user.password = await bcrypt.hash(newPassword, SALT_ROUNDS)
        await user.save()
 
        // The OTP is single-use — remove it (and any other pending ones for
        // this email) once it's been successfully used.
        await passwordResetModel.deleteMany({ email })
 
        // Password changed — revoke every existing session so a stolen
        // session/refresh-token cookie from before the reset stops working.
        await SessionModel.updateMany({ user: user._id, revoked: false }, { revoked: true })
 
        return res.status(200).json({ message: 'Password reset successful. Please log in again.' })
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}




module.exports = { Signup  , GetMe , refreshToken  , login , logout , logoutAll , verifyemail  , forgotPassword, resetPassword }
