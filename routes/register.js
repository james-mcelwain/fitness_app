var express = require('express');
var router = express.Router();
var User = require('../models/user');
var path = require('path')


router.get('/', function(req, res, next) {
  var file = path.join(__dirname, '../views/register.html');
  res.sendFile(file);
});

router.post('/', function(req, res, next){
  User.create(req.body, function(err, post){
    if (err) {
      if(err.code == 11000){
        res.json('Already exists');
      } else{
          next(err);
        }
     } else {
       res.redirect('/login');
     }
   });
});


module.exports = router;
