const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Parole = new Schema({

        Parole_ID : {type: String , required: true},
        Prisoner_ID : {type: String , required: true},
        No_of_Times : {type: Number , required: false},
        Out_year : {type: [String] , required: false},
        Out_Month: {type:[String],required:false},
        Out_Date : {type:  [String] , required: false},
        In_year : {type: [String] , required: false},
        In_Month: {type:[String],required:false},
        In_Date : {type:  [String] , required: false},
    },
       {collection:"Parole"}
)

module.exports = mongoose.model('Parole',Parole)
