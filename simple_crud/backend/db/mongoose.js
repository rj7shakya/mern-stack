const mongoose = require('mongoose');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const databaseName = 'crud';

MongoClient.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
},(error,client)=>{
    if(error){
        return console.log('unable to connect to db');
    }
    const db = client.db(databaseName);
    // db.createCollection("customers", function(err, res) {
    //     if (err) throw err;
    //     console.log("Collection created!");
    //     client.close();
    // });
    // console.log(process.env.MONGO_URI);
    console.log('connected to db');
})
