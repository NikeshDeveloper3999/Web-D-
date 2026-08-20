const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname : { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salt: { type: String, required: true },
    password: { type: String, required: true },
    profileUrl : { type: String, required: true , default :"./Public/image/default-img.jpg" }
        
});
module.exports = mongoose.model('User', userSchema);
