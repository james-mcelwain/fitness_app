var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next){
    var file = path.join(__dirname, '../views/login.html');
    res.sendFile(file);
});

router.post('/',
  passport.authenticate('local'), function(req, res) {
    res.send({
      username: req.user.username,
      blocked: req.user.blocked
    })
  });

module.exports = router;
