var Comments = require('../models/comments');

var getComments = function(activityId){

    Comments.find({activity_id: activityId}).
        where('isBlocked').equals(false).
        exec(function(err, comment){
        if(err){
            console.log(err);
            next(err);
        } else {
            res.json(comment);
        }
    })
};


module.exports = getComments;