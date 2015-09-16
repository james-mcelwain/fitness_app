var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/partials/home', function(req, res, next) {
  if (req.isAuthenticated() == true){
    var file = path.join(__dirname, '../partials/partials/home.html')
    res.sendFile(file);
  }
});

module.exports = router;
