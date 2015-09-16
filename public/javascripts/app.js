//create var for ng-app


        var app = angular.module('myApp', []);


//create controller for ng-controller


        app.controller('myCtrl', ['$scope','$http', function($scope, $http){


//call for activities
// pull all by username


            $scope.get(function(){
                $http.get('/activities').then(function(response){
                    //write code here
                });
            });


//post(put?) for new activity detail
// send effort, distance, duration, summary, comments


            $scope.post(function(obj){
                $http.post('/activities', {
                    username: obj.username,
                    activity: activity_type,
                    date: obj.date,
                    effort: obj.effort,
                    distance: obj.distance,
                    units: units,
                    duration: obj.duration,
                    summary: obj.summary
                });
            });


//put for blocked
// append blocked user to ???


            $scope.block(function(userId){
                $http.put('user/blocked', {
                    username: userId,
                    blocked: true
                }).then(function(response){
                    //write some code here
                });
            });


//post for add activity
// send date, activity type, effort, duration, distance, units, summary


            $scope.put(function(obj){
                $http.put('/activities', {
                    activityId: activity._id
                    activity: obj.activity,
                    date: obj.date,
                    effort: obj.effort,
                    distance: obj.distance,
                    duration: obj.duration,
                    summary: obj.summary
                });
            });


//delete activity


            $scope.delete(function(activityId){
                $http.delete('/activities/' + activityId).then(function(response){
                    alert('Activity has been deleted');
                });
            });
        }]);