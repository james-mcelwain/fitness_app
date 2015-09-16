var mongoose = require('mongoose');
var schema = mongoose.Schema;

//comments schema
var commentSchema = new schema({
    date: { type: Date, default: Date.now() },
    user_id: { type: String },
    activity_id: { type: String },
    comment: { type: String }
});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

