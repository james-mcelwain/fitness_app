var calc = require('./calc');

var packageStats = function( array, range  ){
    return {
        totalTimeExercised: calc.totalTimeExcer( array ),
        averageTimeExercised: calc.averageByRange( array, range ),
        totalActivities: array.length,
        averageActivityTime: calc.avgActivityTime( array ),
        mostFrequentActivity: calc.mostFreqAct( array ),
        personalRecords: {
            longestDistance: calc.longestDistance( array ),
            maximumTime: calc.longestDuration( array )
        }
    }
};

module.exports.package = packageStats;