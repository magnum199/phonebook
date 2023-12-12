const jwt = require('jsonwebtoken');
// routes/userRoutes.js
const express = require('express');
const verifytokenroute = express.Router();

const User = require('../models/users');

// Define routes
verifytokenroute.get('', (req, res) => {
    var token = req.headers.authorization;
    //console.log('works')
    // Verify the token
jwt.verify(token, 'masterkey', (err, decoded) => {
    if (decoded){
        
        User.findOne({phone: decoded.phone})
        .then(function (mdata){
            //console.log(mdata);
            if(mdata.password == decoded.password){
                // match
                res.status(200).send('Ok');
                 
            }
            else {// mismatch 
                res.status(401).send('Unauthorized');
            }
        })
        .catch(function (err){
            
            res.status(404).send('Not Found');
        });
    
    }
    else if(!decoded){
    res.status(403).send('Forbidden');
    }
  });
});





module.exports = verifytokenroute;
