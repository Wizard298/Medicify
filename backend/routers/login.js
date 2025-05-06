const express = require('express')
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



const port = process.env.PORT || 3500
app.listen(port, ()=>{
    console.log(`The app listening on port http://localhost:${port}`)
})