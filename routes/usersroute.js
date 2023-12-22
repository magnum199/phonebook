// routes/userRoutes.js
const express = require('express');
const usersroute = express.Router();

const User = require('../models/users');

// Define routes
//get all users
usersroute.get('/allusers', (req, res) => {
    User.find().then(function (prof){
      res.json(prof);
    })
    .catch(function (err){
      res.json({"msg": "Failure"});
    });
  
});

//get a user
usersroute.get('/:phone', (req, res) => {
  User.findOne({phone: req.params.phone}).then(function (prof){
    res.json(prof);
  })
  .catch(function (err){
    res.json({"msg": "Failure"});
  });

});

usersroute.post('', (req, res) => {
  
  User.findOne({phone: req.body.phone}).then(function (databas){
    if(databas){
      res.json({msg: "Phone number already exist"});

    }
    else{
      //new phone(user) 
    const newUser = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      password: req.body.password
      
      
    });

    newUser.save().then(function (mdata){
      res.json({"msg": "Success"});
    })
    .catch(function (err){
      //console.log(err);
      res.json({"msg": "Failure"});
    });

    }

  })
  .catch(function (err){

  });


    
    

});






//delete a user
usersroute.delete('/:phone', (req, res) => {
  User.deleteOne({phone: req.params.phone}).then(function (prof){
    res.json(prof);
  })
  .catch(function (err){
    res.json({"msg": "Failure"});
  });

});

//delete all users
usersroute.delete('', (req, res) => {
  User.deleteMany().then(function (prof){
    res.json(prof);
  })
  .catch(function (err){
    res.json({"msg": "Failure"});
  });

});









module.exports = usersroute;
