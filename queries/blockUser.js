var User = require('../models/user');

var blockUser = function(userId, blockedUserId, callback){

    User.update({_id: userId}, {$push: {blocked: blockedUserId }}, function(err, blockedUserId){
        if(err){
            console.log(err);
            next(err);
        }
        callback(blockedUserId);
    }

    )};

module.exports = blockUser;