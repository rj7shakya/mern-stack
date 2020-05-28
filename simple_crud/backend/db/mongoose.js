const mongoose = require('mongoose');
const mongodb = require('mongodb');


mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useUnifiedTopology:true,
},(error,client)=>{
    if(error){
        return console.log('unable to connect to db');
    }
    console.log('connected to db');
})
