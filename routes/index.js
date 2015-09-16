var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, '../views/index.html'));
=======
  var file = path.join(__dirname, '../views/index.html')
  res.sendFile(file);
>>>>>>> 64a047a5dc776e37f2cfdf9af19105338f74c761
});

module.exports = router;
