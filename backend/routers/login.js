const express = require('express')
// const mongoose = require('mongoose')
const cors = require('cors')
const loginList = require('../models/loginMod')
require('../mongodb/connect')


const app = express()

// Creating Middleware
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Created Successfully!')
})

app.post('/signup',(req, res)=>{
    loginList.create(req.body)
    .then(logins => res.json(logins))
    .catch(err => res.json(err))
})

app.post('/login',(req, res)=>{
    const {email, password} = req.body;

    loginList.findOne({email: email})
    .then((user) => {
        if(user){
            if(user.password === password){
                res.json("Successful")
            }
            else{
                res.json("Password Incorrect")
            }
        }
        else{
            res.json("No record existed")
        }
    })
    .catch(err => console.log(err))
})



const port = process.env.PORT || 3500
app.listen(port, ()=>{
    console.log(`The app listening on port http://localhost:${port}`)
})