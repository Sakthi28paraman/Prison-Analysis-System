const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Visitor = new Schema({

        Visitor_Name : {type: String , required: true},
        Visitor_ID : {type: String , required: true},
        Visitor_Relation : {type: String , required: false},
        // Visitor_Age : {type:Number,required:true},
        Prisoner_ID : {type: String , required: false},
        Visitor_City : {type: String , required: false},
        Visitor_State : {type: String , required: false}
    },
        {collection:"Visitor"}
)

module.exports = mongoose.model('Visitor',Visitor)