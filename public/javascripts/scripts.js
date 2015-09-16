/**
 * Created by Mothra on 9/15/15.
 */
var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/login',
        {
            templateUrl: '/partials/login.html',
            controller: 'loginController'
        }).when('/register',
        {
            templateUrl: '/partials/register.html',
            controller: 'registerController'
        })
});


app.controller('loginController', function($scope){
    $http.POST('/login').
        then(function(response) {
            $location.path('/home');
        }, function(response) {
            $scope.message = "Incorrect username or password";
            $scope.errClass = true;
        });
});

app.controller('registerController', function($scope){
    if($scope.password != $scope.confirm-password){
        $scope.message = "passwords do not match";
    } else {
        $http.POST('/register').
            then(function (response) {
                $location.path('/login');
            }, function (response) {
                if (response.data = "Exists"){
                    $scope.message = "user already exists";
                    $scope.errClass = true;
                }
            });

    }
});