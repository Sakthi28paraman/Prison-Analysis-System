const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Punishment = new Schema({

        Punishment_ID : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        Punishment : {type: String , required: false},
        Case_No : {type: Number , required: false},
        Crime : {type:[String],required:false},
        Sections : {type:  [String] , required: false},
        Lawyer_Name : {type: String, required: false},
        Court_City: {type: String ,required:false},
        Court_State : {type: String , required: false},
    },
       {collection:"Punishment"}
)

module.exports = mongoose.model('Punishment',Punishment)
