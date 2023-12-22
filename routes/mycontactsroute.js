// routes/userRoutes.js
const express = require('express');
const usersroute1 = express.Router();

const User = require('../models/users');
const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');



//save new contact route
usersroute1.post('', (req, res) => {
  
  User.findOne({phone: req.body.userphone}).then(function (databas){
    if(databas){
      const contactobj = {
        _name: req.body.contact_name,
        _phone: req.body.phone
      }

      /*
      if(databas.contacts_list.length == 0){
        databas.contacts_list.push(contactobj);
      }
      else{
        databas.contacts_list.push(contactobj);//put new contact in database doc
        //fetch only names from docs
        //var namesarray = [];

        var lent = databas.contacts_list.length;
        
         const namesarray = databas.contacts_list.map((item) => {
          return item._name;
         });
        
         console.log(namesarray);
        console.log(namesarray.sort());
        
        //console.log(sortcontactNames(inparray));

      }
      
      */

      databas.contacts_list.push(contactobj);
      
      databas.save().then(function (outp) {
        res.json(outp);


      }).catch(function (error) {
        res.json(error);
      });

      


    }

  })
  .catch(function (err){

  });

  });



  //delete all users
usersroute1.delete('/deleteall', (req, res) => {
  User.deleteMany().then(function (prof){
    res.json(prof);
  })
  .catch(function (err){
    res.json({"msg": "Failure"});
  });

});


  //delete a user by phone
  usersroute1.delete('/:phone', (req, res) => {
    User.deleteOne({phone: req.params.phone}).then(function (prof){
      res.json(prof);
    })
    .catch(function (err){
      res.json({"msg": "Failure"});
    });
  
  });
  
  

      
module.exports = usersroute1;
