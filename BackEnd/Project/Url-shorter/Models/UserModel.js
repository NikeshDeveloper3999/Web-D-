const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
ShortId : { type : String, required : true  , unique : true}, 
redirectUrl : { type : String, required : true  },
visithistory : [ {timeStamp :{type: Number}}]},
{timestamps : true})


module.exports = mongoose.model('user', userschema)

