const mongoose = require('mongoose')

const MongoDbUrl = process.env.MONGODB_URL;

mongoose.connect(MongoDbUrl, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to Mongodb Successfully!")
}).catch((err)=>{
    console.log("Not Connected", err)
})
