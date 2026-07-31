
const express = require('express') 
const router = express.Router()

const authController = require('../controller/authController')

// POST   /auth/signup  - Register a new user
router.post('/signup',authController.Signup)


// Get   /auth/getme
router.get('/getme',authController.GetMe )

// get  /auth/refresh-token
router.get('/refresh-token',authController.refreshToken )

module.exports = router
