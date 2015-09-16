var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path')
var mongoose = require('mongoose');

//if partial partials are in public file this won't be needed
// router.get('/', function(req, res, next){
//   var file = path.join(__dirname, '../partials/register.html');
//   res.send(file);
// })

//create users and send a 200 status if successful, if user exists this will respond with 'already exists'
router.post('/', function(req, res, next){
  User.create(req.body, function(err, post){
    if (err) {
      if(err.code == 11000){
        res.json('Exists');
      } else{
          next(err);
        }
     } else {
       res.sendStatus(200);
     }
   });
});


module.exports = router;
