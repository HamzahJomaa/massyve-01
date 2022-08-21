const rateLimit = require("express-rate-limit")

// Rate Limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 5
})

module.exports = {
    limiter
}