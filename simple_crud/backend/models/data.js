const mongoose = require('mongoose');
const validator = require('validator');

const dataSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date
    },
    contact:{
        type:Number,
        trim:true
    }
},{
    timestamps:true
});

const Data = mongoose.model('Data',dataSchema);

module.exports = Data;
