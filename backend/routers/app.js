const express = require('express')
require('../mongodb/connect')
const MedicineList = require('../models/mod')

const app = express()

//Creating Middleware
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Backend Server Created Successfully!', MedicineList)
    // try{
    // }
    // catch(err){
    //     res.status(400).send(err)
    // }
})

app.post('/list', async (req,res)=>{
    try{
        const newList = new MedicineList(req.body)
        console.log(req.body)
        const saving = await newList.save()
        res.status(201).send(saving)
    }
    catch(err){
        res.status(400).send(err)
    }
})

const port = process.env.PORT || 2300
app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`)
})