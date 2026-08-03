const { z } = require('zod')
// npm install zod

const signupSchema = z.object({
    name: z.string().trim().min(2, 'Name must be at least 2 characters').max(60),
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain a lowercase letter')
        .regex(/[A-Z]/, 'Password must contain an uppercase letter')
        .regex(/[0-9]/, 'Password must contain a number')
})

const loginSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
})

const otpSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    otp: z.string().trim().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must be numeric')
})

const forgotPasswordSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address')
})

const resetPasswordSchema = z.object({
    email: z.string().trim().toLowerCase().email('Invalid email address'),
    otp: z.string().trim().length(6, 'OTP must be 6 digits').regex(/^\d+$/, 'OTP must be numeric'),
    newPassword: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[a-z]/, 'Password must contain a lowercase letter')
        .regex(/[A-Z]/, 'Password must contain an uppercase letter')
        .regex(/[0-9]/, 'Password must contain a number')
})

// Generic factory: validate(schema) returns an Express middleware.
// On success it overwrites req.body with the parsed/normalized data
// (e.g. lowercased + trimmed email) so downstream code can trust it.
function validate(schema) {
    return (req, res, next) => {
        const result = schema.safeParse(req.body)
        if (!result.success) {
            const firstError = result.error.issues[0]
            return res.status(400).json({
                message: firstError?.message || 'Invalid request body',
                field: firstError?.path?.[0]
            })
        }
        req.body = result.data
        next()
    }
}

module.exports = {
    validateSignup: validate(signupSchema),
    validateLogin: validate(loginSchema),
    validateOtp: validate(otpSchema),
    validateForgotPassword: validate(forgotPasswordSchema),
    validateResetPassword: validate(resetPasswordSchema)
}