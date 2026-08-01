
const express = require('express') 
const router = express.Router()

const authController = require('../controller/authController')

// POST   /api/auth/signup  - Register a new user
router.post('/signup',authController.Signup)

// Get   /auth/getme
router.get('/getme',authController.GetMe )

// get  /auth/refresh-token
router.get('/refresh-token',authController.refreshToken )

// get  /auth/logout
router.get('/logout',authController.logout )

// POST   /auth/login  - Login a user
router.post('/login',authController.login)

// POST   /auth/logout-all  - Logout a user all devices 
router.post('/logout-all',authController.logoutAll)



module.exports = router
