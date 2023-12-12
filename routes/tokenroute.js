const jwt = require('jsonwebtoken');
// routes/userRoutes.js
const express = require('express');
const tokenroute = express.Router();

const User = require('../models/users');

// Define routes
tokenroute.get('', (req, res) => {
    User.find().then(function (prof){
      res.json(prof);
    })
    .catch(function (err){
      res.json({"msg": "Failure"});
    });
  
});

tokenroute.post('', (req, res) => {

  //check if user exist
  User.findOne({phone: req.body.phone})
  .then(function (prof){

    if(prof){
      if(req.body.password == prof.password){
        //send a token
        const muser = {
          first_name: prof.first_name,
          last_name: prof.last_name,
          phone: prof.phone,
          password: prof.password
        }
        
        // Generate a token with user information
        const token = jwt.sign(muser, 'masterkey', { expiresIn: '1h' });
        res.json({token: token});
      }
      else{
        
        res.json({msg: 'Incorrect password'});
      }


      //res.json(prof);
    }
    else{//if response is null
      res.status(404).send('Not Found');
      //console.log(prof);
    }
  })
  .catch(function (err){
    //console.log(err);
    res.json(err);
  });
});











module.exports = tokenroute;
