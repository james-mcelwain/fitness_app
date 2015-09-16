var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Stats = require('../models/statistics'),
    Activities = require('../models/activities'),
    tests = require('./tests/statsTests');

// EXTERNAL API

router.post('/statstest', function( req, res, next ){
    var number = req.body.number;
    number = parseInt(number);
    console.log("Number to create: ", number);
    tests.tests(number);

    res.sendStatus(200);
});


// INTERNAL QUERIES

var allActivitiesById = [];

function c( user_id ){
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

module.exports = router;
