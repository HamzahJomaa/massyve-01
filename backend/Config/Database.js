const mongoose = require("mongoose")
require("dotenv").config()

exports.connectDb = (callback) => {
    const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/test"
    mongoose.connect(dbUrl,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log("Database connected")
        callback()
    })
        .catch((error) => {
            console.log("Couldn't Connect to Database")
            console.error(error)
        })
}