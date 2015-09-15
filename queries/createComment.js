var Comments = require('../models/comments');

var createComment = function(userId, activityId, comment){
    var comment = new Comments({user_id: userId, activity_id: activityId, comment: comment});

    comment.save(function(err){
        if(err){
            console.log(err);
            next(err);
        }
    })
};


module.exports = createComment;