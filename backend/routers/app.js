const express = require('express')
const cors = require('cors')
// Connecting to mongo
require('../mongodb/connect')
// Creating Models
const MedicineList = require('../models/mod')
const loginList = require('../models/loginMod')


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

// app.get('/allmedicines/id',async (req,res)=>{
//     try{
//         const medicify = await MedicineList.find({}).limit(limit)
//         res.json({ medicify })
//     }
//     catch(err){
//         console.log('The error is: ', err)
//     }
// })


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
app.listen(port,()=>{
    console.log(`App listening on port http://localhost:${port}`)
})





