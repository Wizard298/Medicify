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

// app.post('/list', async (req,res)=>{
//     try{
//         const newList = new MedicineList(req.body)
//         console.log(req.body)
//         const saving = await newList.save()
//         res.status(201).send(saving)
//     }
//     catch(err){
//         res.status(400).send(err)
//     }
// })



const port = process.env.PORT || 3500
app.listen(port, ()=>{
    console.log(`The app listening on port http://localhost:${port}`)
})