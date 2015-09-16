var Comments = require('../models/comments');
var moment = require('moment');

var getComments = function(activityId, blockedIDs, callback){

    Comments.find({ activity_id: activityId, user_id: { "$nin" : blockedIDs } }, function(err, comments){
        if(err){
            console.log(err);
            next(err);
        }

        // empty object for updated comments
        var updatedComments = [];

        // for loop to iterate all the comments and prettify dates
        for (var i = 0; i < comments.length; i++) {

            // create new comment object with pretty dates
            var updatedComment = {
                _id: comments[i]._id,
                user_id: comments[i].user_id,
                activity_id: comments[i].activity_id,
                comment: comments[i].comment,
                date: moment(comments.date).format("MMM Do YY")
            };

            // push new comment objects with pretty dates into updated comments array
            updatedComments.push(updatedComment);
        }

        callback(updatedComments);
    });
};

module.exports = getComments;