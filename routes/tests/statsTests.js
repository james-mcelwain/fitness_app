function Activity(user_id,duration,distance,units,effort,activity_type,date,summary){
  this.user_id= user_id,
  this.duration= duration,
  this.distance= distance,
  this.units= units,
  this.effort= effort,
  this.activity_type= activity_type,
  this.date= date,
  this.summary= summary
};

var activity_types = ['walking','running','swimming','biking', 'jogging'];
var activityArray = [];

function randomInt(min, max){
       return Math.floor(Math.random() * (1 + max - min) + min);
   }

for(var i = 0;i<80;i++){
    activity = new Activity(i,randomInt(1,100),randomInt(1,50),'miles','super hard',activity_types[randomInt(0,4)],Date.now(),'summary');
    activityArray.push(activity);
};


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
    maxDistance = Math.max.apply(null, distArray);

    activityName = array[distArray.indexOf(maxDistance)].activity_type;

    return {activity_type: activityName, distance: maxDistance}
}

function longestDuration( array ){

    timeArray = [];
    array.forEach(function( item, index ){
        timeArray.push(item.duration)
    });
    maxDuration = Math.max.apply(null, timeArray);
  
    activityName = array[timeArray.indexOf(maxDuration)].activity_type;

    return {activity_type: activityName, duration: maxDuration}
}