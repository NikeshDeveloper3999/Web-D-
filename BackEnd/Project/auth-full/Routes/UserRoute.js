const express = require('express')
const router = express.Router()

const {
    Signup, GetMe, refreshToken, login, logout, logoutAll, verifyemail,
    forgotPassword, resetPassword
} = require('../controller/authController')
const {loginLimiter, signupLimiter, otpLimiter, refreshLimiter,forgotPasswordLimiter, resetPasswordLimiter} = require('../Middleware/Ratelimiter')

const {
    validateSignup, validateLogin, validateOtp,
    validateForgotPassword, validateResetPassword
} = require('../Middleware/Validate')

router.post('/signup', signupLimiter, validateSignup, Signup)
router.post('/login', loginLimiter, validateLogin, login)
router.post('/verify-email', otpLimiter, validateOtp, verifyemail)
router.post('/forgot-password', forgotPasswordLimiter, validateForgotPassword, forgotPassword)
router.post('/reset-password', resetPasswordLimiter, validateResetPassword, resetPassword)
router.post('/refresh', refreshLimiter, refreshToken)
router.post('/logout', logout)
router.post('/logout-all', logoutAll)
router.get('/me', GetMe)

module.exports = router