var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
    user_id: {type: String},
    duration: {type: Number},
    distance: {type: Number},
    effort: {type: String},
    activity_type: {type: String},
    date: {type: Date}
});

module.exports = mongoose.model("activities", ActivitiesSchema);