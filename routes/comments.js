var express = require('express');
var router = express.Router();
var createComment = require('./queries/createComment.js');
var deleteComment = require('./queries/deleteComment.js');

/* GET route */
// get comments for activity
router.get('/:activity_id', function(req, res, next) {
    res.json('Comments')
});

/* POST route */
// post comment to activity
router.post('/:activity_id', function(req, res, next) {
    createComment(req.params.activity_id, req.body);
    res.sendStatus(200);
});

/* DELETE route */
router.delete('/:activity_id', function(req, res, next) {

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