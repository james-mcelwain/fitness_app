var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Stats = require('../models/statistics'),
    Activities = require('../models/activities');

// EXTERNAL API

router.get('/allstats', function( req , res, next ){


});

router.get('/statsbyrange', function( req, res , next ){


});


// INTERNAL API

var allActivitiesById = [];

function queryAllActivitiesById( user_id ){
    Activities.find({'Activites.user_id' : req.body.user_id }, function( err, activities ){
        if ( err ){
            console.log( err );
            next( err );
        } else {
            allActivitiesById = activties;
        }
    });
}




function queryActivitiesByDateRange( user_id, beginDate, endDate ){
    var activitiesByRange = [];
    Activities.find({"$gte": beginDate, "$lt": endDate}, function( err, activities ){
        activitiesByRange = activities;
    })
}
function packageStats( array ){
    return {
        totalTimeExercised: totalTimeExcer( array ),
        averageTimeExercised: "",
        totalActivities: PARAM.length,
        averageActivityTime: avgActivityTime( array ),
        mostFrequentActivity: mostFreqAct( array ),
        personalRecords: {
            longestDistance: longestDistance( array ),
            maximumTime: longestDuration( array )
        }
    }
}

function mostFreqAct( array )
{
    // if array argument empty return null
    if(array.length == 0)
        return null;

    // init empty object to store counters
    var modeMap = {};

    // init answer var starting at first element; stores the "winning" element; inits counter
    var maxEl = array[0], maxCount = 1;
    // for each item in the array, do:
    array.forEach(function(item, index)
    {

        // set temp var el to the activity string
        var el = item.activity_type;

        // if the counter has not yet been defined, init and give it it's first count
        if(modeMap[el] == null)
            modeMap[el] = 1;
        // otherwise, increment the count of the element by 1
        else
            modeMap[el]++;
        // if the current count of a specific element becomes greater than the current "winning" count, it becomes the new maxEl
        // update maxCount to value of maxEl counter
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    });
    return maxEl;
}

function totalTimeExcer( array ){
    var totalTime = 0;
    array.forEach(function( item, index ){
        totalTime += item.duration;
    });
    return totalTime;
}

function avgActivityTime( array ){
    var totalTime = 0;
    array.forEach(function( item, index ){
       totalTime += item.duration;
    });
    var avgTime = totalTime/array.length;
    return avgTime;
}

function longestDistance( array ){

    distArray = [];
    array.forEach(function( item, index ){
        distArray.push(item.distance)
    });
    maxDistance = function(distArray) {
        return Math.max.apply(null, distArray);
    };
    activityName = array[distArray.indexOf(maxDistance)].activity_type;

    return {activity_type: activityName, distance: maxDistance}
}

function longestDuration( array ){

    timeArray = [];
    array.forEach(function( item, index ){
        timeArray.push(item.duration)
    });
    maxDuration = function(timeArray) {
        return Math.max.apply(null, timeArray);
    };
    activityName = array[timeArray.indexOf(maxDuration)].activity_type;

    return {activity_type: activityName, duration: maxDuration}
}