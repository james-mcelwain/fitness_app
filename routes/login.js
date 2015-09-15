var express = require('express');
var router = express.Router();


router.post('/',
  passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/',
    failureFlash: true
});
