var Comments = require('../models/comments');

var deleteComment = function(commentId, callback){

    Comments.findByIdAndRemove({ _id : commentId }, function(err, comments){
        if(err){
            console.log(err);
            next(err);
        }
        callback(comments);
    });
};


module.exports = deleteComment;