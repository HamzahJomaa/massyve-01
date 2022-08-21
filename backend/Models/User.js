const {Schema, model} = require("mongoose")



const UserSchema = new Schema({
    fullname:{
        type: String,
        required: [true, "Full Name is Required"],
    },
    username:{
        type: String,
        required: [true, "Username is Required"],

    },
    password:{
        type: String,
        required: [true, "Password is Required"],
    },
    email: {
        type: String,
    }
},{timestamps:true})



module.exports = model("User", UserSchema)