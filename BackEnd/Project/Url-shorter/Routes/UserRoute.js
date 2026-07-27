
const express = require( 'express')
const router = express.Router()
const login_user = require( '../Controller/Login_user')


router.post('/signup', login_user.handleuserSIgnup )


module.exports = router;
