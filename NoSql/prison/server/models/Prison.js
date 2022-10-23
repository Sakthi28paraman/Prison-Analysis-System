const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Prison = new Schema({

        Prison_Name : {type: String , required: true},
        Prison_ID : {type: String , required: true},
        Prison_capacity : {type: Number , required: false},
        Prison_City : {type: String , required: false},
        Prison_State : {type: String , required: false},
        Current_Prisoners:{type:Number , required:false},
        No_of_Males:{type:Number , required:false},
        No_of_Females:{type:Number , required:false}
    },{collection:'Prison'}
)

module.exports = mongoose.model('Prison',Prison)