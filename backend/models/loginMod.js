const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    firstname:{
        type: String,
        // required: true
    },
    lastname:{
        type: String,
        // required: true
    },
    email:{
        type: String,
        // required: true
    },
    password:{
        type: String,
        // required: true
    }
})

const loginList = new mongoose.model("logins", loginSchema)

module.exports = loginList;