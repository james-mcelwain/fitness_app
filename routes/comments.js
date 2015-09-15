var express = require('express');
var router = express.Router();
var getCommentsByActivity = require('../queries/getCommentsByActivity.js');
var createComment = require('../queries/createComment.js');
var deleteComment = require('../queries/deleteComment.js');



/* GET route */
// get comments for activity
router.get('/:activity_id', function(req, res, next) {
    var comments = JSON.stringify(getCommentsByActivity(req.params.activity_id));
    res.json(comments)
});

/* POST route */
// post comment to activity
router.post('/:activity_id', function(req, res, next) {
    console.log(req.body);
    createComment(req.body.userId, req.params.activity_id, req.body.comment);
    res.sendStatus(200);
});

/* DELETE route */
// delete comment from activity
router.delete('/:comment_id', function(req, res, next) {
    deleteComment(req.params.comment_id);
    res.sendStatus(200);
});

module.exports = router;