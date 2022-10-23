const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Prisoner = new Schema({

        Prisoner_Name : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        Prison_ID : {type: String , required: true},
        Prisoner_Age : {type: Number , required: false},
        Prisoner_City : {type: String , required: false},
        Prisoner_State : {type: String , required: false},
        Cell_No:{type:Number , required:false},
        Punishment_ID:{type:String , required:false},
        Arrested_Year:{type:Date , required:false},
        Release_Year:{type:Date , required:false}
    },
       {collection:'Prisoner'}
)

module.exports = mongoose.model('Prisoner',Prisoner)