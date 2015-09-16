var mongoose = require('mongoose'),
    Activity = require('../../models/activities'),
    Chance = require('chance');



var activityTestWrite = function(numCreate) {

    var chance = new Chance();

    var numberToCreate = numCreate;
    var activity_types = ['walking', 'running', 'swimming', 'biking', 'jogging'];
    var activityArray = [];

    function ActivityObj(user_id, duration, distance, units, effort, activity_type, date, summary) {
            this.user_id = user_id,
            this.duration = duration,
            this.distance = distance,
            this.units = units,
            this.effort = effort,
            this.activity_type = activity_type,
            this.date = date,
            this.summary = summary
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    for (var i = 0; i < numberToCreate; i++) {
        var activity = new ActivityObj(1, randomInt(1, 100), randomInt(1, 50), 'miles', 'super hard', activity_types[randomInt(0, 4)], chance.date({year: 2001}), 'summary');

        activityArray.push(activity);
    }

    activityArray.forEach(function (item, index) {
        console.log("in activit for each");
        console.log(item);
        Activity.create(item, function (err) {
            if (err) {
                console.log(err);
                next(err);
            }
        })
    });
};

module.exports.tests = activityTestWrite;
