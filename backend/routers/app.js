const express = require('express')
const cors = require('cors')
// Connecting to mongo
require('../mongodb/connect')
// Creating Models
const MedicineList = require('../models/mod')

const app = express()

//Creating Middleware
app.use(express.json())
app.use(cors())


app.get('/', (req,res)=>{
    res.send('Backend Server Created Successfully!')
})

app.get('/allmedicines',async (req,res)=>{
    try{
        const limit = parseInt(req.query.limit)
        const medicify = await MedicineList.find({}).limit(limit)
        res.json({ medicify })
    }
    catch(err){
        console.log('The error is', err)
    }
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

const port = process.env.PORT || 2300
app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`)
})