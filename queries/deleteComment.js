var Comments = require('../models/comments');

var deleteComment = function(commentId){

    Comments.findByIdAndRemove(commentId, function(err, comment){
        if(err){
            console.log(err);
            next(err);
        } else {
            res.json({ message: 'Comment deleted.'})
        }
    })
};


module.exports = deleteComment;