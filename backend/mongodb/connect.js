const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Project',{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to Mongo Successfully!")
}).catch((err)=>{
    console.log("Not Connected", err)
})
