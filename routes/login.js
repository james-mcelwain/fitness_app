var express = require('express');
var router = express.Router();
var passport = require('passport');

//this *should* authenticate, and if successful respond with req.user, and then an object with username and blocked in it..
router.post('/',
  passport.authenticate('local', {failureFlash: true}), function(req, res) {
    res.send({
      username: req.user.username,
      blocked: req.user.blocked
    })
  });

module.exports = router;
