const mongoose = require('mongoose')
const userModel = require('../models/UserModels')

const findUser = async ({ email, mobile, aadhar }) => {
const user = await userModel.findOne({
    $or: [
      { email: email },
      { mobile_number: mobile },
      { aadhar_number: aadhar },
    ],
  })
    
return user
}

module.exports = { findUser }
