const { rateLimit, ipKeyGenerator } = require('express-rate-limit')
// npm install express-rate-limit

// Generic response shape so the client can handle 429s consistently
const handler = (req, res) => {
    res.status(429).json({ message: 'Too many requests. Please try again later.' })
}

// Login: the classic brute-force target. Tight window, tight count.
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 8,
    standardHeaders: true,
    legacyHeaders: false,
    handler,
    // Key by IP + email so one attacker can't lock out a shared office IP,
    // but a single account still can't be hammered from many IPs.
    // ipKeyGenerator() normalizes IPv6 addresses so the /64-block, not the
    // full address, is used — otherwise an attacker can rotate the suffix
    // of their IPv6 address to get a "new" key on every request.
    keyGenerator: (req) => `${ipKeyGenerator(req.ip)}:${req.body?.email || ''}`
})

// Signup: prevent mass account creation / email-bombing via the OTP send.
const signupLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler
})

// OTP verification: a 4-6 digit code is brute-forceable fast without this.
const otpLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
    handler,
    keyGenerator: (req) => `${ipKeyGenerator(req.ip)}:${req.body?.email || ''}`
})

// Refresh: generous, since legitimate clients call this often, but still capped.
const refreshLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 30,
    standardHeaders: true,
    legacyHeaders: false,
    handler
})

// Forgot password: throttle so this can't be used to mass-email/spam
// arbitrary addresses, or to probe which emails have accounts.
const forgotPasswordLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    handler,
    keyGenerator: (req) => `${ipKeyGenerator(req.ip)}:${req.body?.email || ''}`
})

// Reset password: the OTP is only 6 digits, so this needs the same
// brute-force protection as verify-email.
const resetPasswordLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
    handler,
    keyGenerator: (req) => `${ipKeyGenerator(req.ip)}:${req.body?.email || ''}`
})

module.exports = { loginLimiter, signupLimiter, otpLimiter, refreshLimiter, forgotPasswordLimiter, resetPasswordLimiter }