var mongoose = require('mongoose'),
    Activity = require('../models/activities'),
    chance = require('chance');

function ActivityObj(user_id,duration,distance,units,effort,activity_type,date,summary){
  this.user_id= user_id,
  this.duration= duration,
  this.distance= distance,
  this.units= units,
  this.effort = effort,
  this.activity_type= activity_type,
  this.date= chance.date({year: 2001}),
  this.summary= summary
};

var activity_types = ['walking','running','swimming','biking', 'jogging'];
var activityArray = [];

function randomInt(min, max){
       return Math.floor(Math.random() * (1 + max - min) + min);
   }

for(var i = 0;i<1000;i++){
    activity = new ActivityObj(i,randomInt(1,100),randomInt(1,50),'miles','super hard',activity_types[randomInt(0,4)],Date.now(),'summary');
    activityArray.push(activity);
;


function packageStats( array ){
    return {
        totalTimeExercised: totalTimeExcer( array ),
        averageTimeExercised: "",
        totalActivities: array.length,
        averageActivityTime: avgActivityTime( array ),
        mostFrequentActivity: mostFreqAct( array ),
        personalRecords: {
            longestDistance: longestDistance( array ),
            maximumTime: longestDuration( array )
        }
    }
}

console.log(packageStats( activityArray ));

activityArray.forEach(function( item, index ){
    Activity.create( item, function( err ){
        if(err){
            console.log(err);
            next(err);
        }
})});


