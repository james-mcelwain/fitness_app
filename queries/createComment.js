var Comments = require('../models/comments');

var create = function(req, res, next){
    var comment = new Comments(req.body);

    comment.save(function(err){
        if(err){
            console.log(err);
            next(err);
        } else {
            res.json({ message: 'Comment created.'})
        }
    })
};


module.exports = create;