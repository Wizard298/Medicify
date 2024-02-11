const mongoose = require('mongoose')

const newSchema = mongoose.Schema({
    id:{
        type: Number,
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

const MedicineList = new mongoose.model('MedicineList', newSchema)

module.exports = MedicineList;