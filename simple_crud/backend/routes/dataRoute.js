const express = require('express');
const router = express.Router();
const Data = require('../models/data');

//add a data
router.post('/data',async (req,res)=>{
  const data = new Data({...req.body});
  try {
    // await data.save();
    data.save().then((newData)=>{
      return res.status(201).json(newData);
    }).catch((err)=>{
      console.log(err);
    })

  } catch (err) {
    return res.status(400).send(err);
  }
});


//get all the data 
router.get('/data',async (req,res)=>{
  try {
    Data.find({},(err,users)=>{
      res.json(users);
    })
  } catch (err) {
    res.status(404).send(err);
  }
})

//update the data
router.patch('/data/:id',async (req,res)=>{
  try {
    const data = await Data.findByIdAndUpdate({_id:req.params.id},req.body, {new: true});
    if(!data){
      return res.status(404).send('No data found');
    }
    return res.json(data);
  } catch (error) {
    res.status(404).send(error);
  }
})

//delete the data
router.delete('/data/:id',async (req,res)=>{
  try {
    const data = await Data.findByIdAndDelete({_id: req.params.id});
    if(!data){
      return res.status(404).send('No data found');
    }
    return res.json(data);
  } catch (error) {
    res.status(404).send(error);
  }
})

//get a data
router.get('/data/:id',async (req,res)=>{
  try {
    const data = await Data.findById({_id: req.params.id});
    if(!data){
      return res.status(404).send('No data found');
    }
    return res.json(data);
  } catch (error) {
    res.status(404).send(error);
  }
})

module.exports = router;