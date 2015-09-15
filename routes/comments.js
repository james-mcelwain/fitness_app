var express = require('express');
var router = express.Router();

/* GET route */
// get comments for activity
router.get('/', function(req, res, next) {
    res.json('Comments')
});

/* POST route */
// post comment to activity
router.post('/', function(req, res, next) {
    res.json('Comment posted')
});

/* DELETE route */
router.delete('/', function(req, res, next) {

    // delete comment from activity by activity user
    if (user){
        res.json('Comment deleted by user')
    }

    // delete comment from activity by comment user
    if (commenter){
        res.json('Comment deleted by commenter')
    }

});

module.exports = router;