
const express = require('express') 
const router = express.Router()

const   createUser  = require('../controller/UserController')

router.post('/signup',createUser.Signup )

module.exports = router
