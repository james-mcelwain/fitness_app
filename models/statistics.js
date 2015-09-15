var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserStatisticsSchema = new Schema({
    userID: { type: String, required: true, index: {unique:true}},
    totalTimeExercised: {
        perMonth: Number,
        perYear: Number,
        perTimePeriod: Number
    },
    averageTimeExercised: {
        perDay: Number,
        perMonth: Number,
        perYear: Number,
        perTimePeriod: Number
    },
    totalActivities: {
        perDay: Number,
        perMonth: Number,
        perYear: Number
    },
    averageActivityTime: {
        activity: {
            type:String,
            perDay: Number,
            perMonth: Number,
            perYear: Number
        }
    },
    mostFrequentActivity: String,
    maximumDistance: Number,
    maximumTime: Number,
    PersonalRecords: {
        fastestRaceTime: Number
    }
});

module.exports = mongoose.model('UserStatistics',UserStatisticsSchema);