var Comments = require('../models/comments');

var getComments = function(activityId, callback){

    Comments.find({ activity_id: activityId }, function(err, comments){
        if(err){
            console.log(err);
            next(err);
        }
        callback(comments);
    });
};

module.exports = getComments;