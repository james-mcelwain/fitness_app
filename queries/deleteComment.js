var Comments = require('../models/comments');

var delete = function(req, res, next){

    Comments.findByIdAndRemove(req.params.id, function(err, comment){
        if(err){
            console.log(err);
            next(err);
        } else {
            res.json({ message: 'Comment deleted.'})
        }
    })
};


module.exports = delete;