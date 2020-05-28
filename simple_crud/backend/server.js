const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./db/mongoose');
const dataRoute = require('./routes/dataRoute');

app.get('/',(req,res)=>{
    res.json({data: 'Hello'});
});

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(dataRoute);

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})