const express = require('express');
const router = express.Router();
const Data = require('../models/data');

//add a data
router.post('/data',async (req,res)=>{
  const data = new Data({...req.body});
  try {
    // await data.save();
    data.save().then(()=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })

    return res.status(201).json({...req.body});
  } catch (err) {
    return res.status(400).send(err);
  }
});


//get all the data 
router.get('/user',async (req,res)=>{
  try {
    
  } catch (err) {
    console.log(err);
  }
})

//update the data
// router.patch()

//delete the data
// router.delete()

module.exports = router;