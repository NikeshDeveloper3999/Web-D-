const mongoose = require('mongoose')

const passwordResetSchema = new mongoose.Schema({
    email: { type: String, required: true, index: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    otpHash: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 600 } // TTL: auto-deletes after 10 minutes
} , { timestamps: true })

module.exports = mongoose.model('PasswordReset', passwordResetSchema)