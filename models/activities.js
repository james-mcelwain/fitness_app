
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
    user_id: {type: String, required: true},
    duration: Number,
    distance: Number,
    units: String,
    effort: String,
    activity: String,
    date: Date,
    summary: String
});

module.exports = mongoose.model("activities", ActivitiesSchema);