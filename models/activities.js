<<<<<<< HEAD
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
    user_id: {type: String},
    duration: {type: Number},
    distance: {type: Number},
    effort: {type: String},
    activity_type: {type: String},
    date: {type: Date}
=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
    user_id: {type: String, required: true},
    duration: Number,
    distance: Number,
    units: String,
    effort: String,
    activity: String,
    date: Date,
    summary: String
>>>>>>> 235434a3e9077e4fbb42ab0c6e5bc58a72c77f28
});

module.exports = mongoose.model("activities", ActivitiesSchema);