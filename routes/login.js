var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var file = path.join(__dirname, '../views/login.html');
    res.sendFile(file);
});

router.post('/',
  passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/',
    failureFlash: true
});

module.exports = router;
