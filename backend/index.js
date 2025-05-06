const express = require('express')
const cors = require('cors')
// loading env variables
require('dotenv').config();
// Connecting to mongo
require('./mongodb/connect')
// Creating Models
const MedicineList = require('./models/mod')
const loginList = require('./models/loginMod')


const app = express()

//Creating Middleware
app.use(express.json())
// app.use(cors())
app.use(cors({
    origin: [
        'http://localhost:3000',
        'https://medicify.netlify.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());


app.get('/', (req,res)=>{
    res.send("<h1> Backend Server Created Successfully! <br> Now go to ---> /allmedicines </h1>")
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

app.get('/allmedicines/:id',async (req,res)=>{
    try{
        const id = req.params.id;
        const oneItem = await MedicineList.find({id})
        res.json({oneItem})
    }
    catch(err){
        console.log(err)
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


// authentication 
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





