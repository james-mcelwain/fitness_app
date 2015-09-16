var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var ActivitiesSchema = new Schema({
    user_id: String,
    duration: Number,
    distance: Number,
    effort: String,
    activity_type: String,
    date: Date
});

module.exports = mongoose.model("activities", ActivitiesSchema);