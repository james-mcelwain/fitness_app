var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

//if partial partials are in public file this won't be needed
// router.get('/', function(req, res, next){
//   var file = path.join(__dirname, '../partials/login.html');
//   res.send(file);
// })

//this *should* authenticate, and if successful respond with req.user, and then an object with username and blocked in it..
router.post('/',
  passport.authenticate('local', {failureFlash: true}), function(req, res) {
    res.send({
      username: req.user.username,
      blocked: req.user.blocked
    })
  });

module.exports = router;
