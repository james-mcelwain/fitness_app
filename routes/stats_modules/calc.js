var calc = {
    mostFreqAct: function(array){
        // if array argument empty return null
        if (array.length == 0)
            return null;

        // init empty object to store counters
        var modeMap = {};

        // init answer var starting at first element; stores the "winning" element; inits counter
        var maxEl = array[0], maxCount = 1;
        // for each item in the array, do:
        array.forEach(function (item, index) {

            // set temp var el to the activity string
            var el = item.activity_type;

            // if the counter has not yet been defined, init and give it it's first count
            if (modeMap[el] == null)
                modeMap[el] = 1;
            // otherwise, increment the count of the element by 1
            else
                modeMap[el]++;
            // if the current count of a specific element becomes greater than the current "winning" count, it becomes the new maxEl
            // update maxCount to value of maxEl counter
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        });
        return maxEl;
    },

    totalTimeExcer: function(array) {
        var totalTime = 0;
        array.forEach(function (item, index) {
            totalTime += item.duration;
        });
        return totalTime;
    },

    avgActivityTime: function(array) {
        var totalTime = 0;
        array.forEach(function (item, index) {
            totalTime += item.duration;
        });
        var avgTime = totalTime / array.length;
        return avgTime;
    },

    longestDistance: function(array) {

    distArray = [];
        array.forEach(function (item, index) {
            distArray.push(item.distance)
        });
        maxDistance = Math.max.apply(null, distArray);

        activityName = array[distArray.indexOf(maxDistance)].activity_type;

        return {activity_type: activityName, distance: maxDistance}
    },

    longestDuration: function(array) {

    timeArray = [];
    array.forEach(function (item, index) {
        timeArray.push(item.duration)
    });
    maxDuration = Math.max.apply(null, timeArray);

    activityName = array[timeArray.indexOf(maxDuration)].activity_type;

    return {activity_type: activityName, duration: maxDuration}

    },

    averageByRange: function( array, range ){
        var returnObj = {};

        var dateRange = range / 86400000;

        returnObj.year = findAvg("year");
        returnObj.month = findAvg("month");
        returnObj.day = findAvg("day");

        function findAvg(param){

            switch (param){
                case "year":
                        if((dateRange/365) < 1 ){
                            return null;
                        } else {
                            var years = dateRange / 365;
                            var totalTime = 0;
                            array.forEach(function(item, index){
                                totalTime += item.duration;
                            });

                            return totalTime / years;
                        }
                case "month":
                    if((dateRange/31) < 1 ){
                        return null;
                    } else {
                        var months = dateRange / 30;
                        var totalTime = 0;
                        array.forEach(function(item, index){
                            totalTime += item.duration;
                        });

                        return totalTime / months;
                    }
                    case "day":
                            var totalTime = 0;
                            array.forEach(function(item, index){
                                totalTime += item.duration;
                            });

                            return totalTime / dateRange;
                default:
                    console.log("incorrect argument passed")

            }
        }

        return returnObj;
    }
};

module.exports = calc;