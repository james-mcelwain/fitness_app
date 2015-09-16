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

router.post('/byrange', function( req, res, next ){
    console.log(req.body);
    var date1 = req.body.begin;
    var date2 = req.body.end;

    var year1 = parseInt(date1.slice(0, 4));
    var month1 = parseInt(date1.slice(6, 7));
    var day1 = parseInt(date1.slice(9, 10));


    var year2 = parseInt(date2.slice(0, 4));
    var month2 = parseInt(date2.slice(6, 7));
    var day2 = parseInt(date2.slice(9, 10));

    console.log(year1, month1, day1);
    console.log(year2, month2, day2);

    date1 = new Date(year1, month1, day1);
    date2 = new Date(year2, month2, day2);
    var range = date2 - date1;

    console.log(range);
    Activities.find({"date": {"$gte": new Date(year1, month1, day1), "$lt": new Date(year2, month2, day2)}}, function( err, activities ){
        //activitiesByRange = activities;
        res.send(activities);
    });
});

// INTERNAL QUERIES

var allActivitiesById = [];

function queryAllActivities( user_id ){
    Activities.find({'Activites.user_id' : req.body.user_id }, function( err, activities ){
        if ( err ){
            console.log( err );
            next( err );
        } else {
            allActivitiesById = activties;
        }
    });
}


module.exports = router;
