var app = angular.module('fitnessApp', []);
​
​
//get stats
app.service('Stats', function ($http) {
    var urlBase = '/statistics/userstats';
    this.getStats = function(){
        return $http({
            method: 'GET',
            url: urlBase + user.id
        });
    }
});
​
app.controller('myCtrl', function($scope, Stats) {
    Stats.getStats().then(function(response){
        $scope.user = response.data;
    });
});
​
//app.controller(/*'CONTROLLER'*/, [$scope], [$http], function($scope, $http){
//    $scope./*function*/ = function(user){
//        $http({
//            method: 'GET',
//            url: '/statistics/userstats' + user.id,
//            data: user,
//            datatype: JSON,
//        }.then(function(response){
//                $scope./*stat*/ = response.data;
//            });
//    });
//});
​
