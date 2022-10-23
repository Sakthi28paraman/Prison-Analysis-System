const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Guard = new Schema({

        Guard_Name : {type: String , required: true},
        Prison_ID : {type: String , required: true},
        Guard_ID : {type: String , required: true},
        Guard_Age : {type: Number , required: false},
        Guard_City:{type:String,required:false},
        Guard_State : {type: String , required: false},
        Guard_Rank:{type:String , required:false},
        Guard_Salary:{type:Number , required:false},
    },
    {collection:"Guard"}
)

module.exports = mongoose.model('Guard',Guard)
