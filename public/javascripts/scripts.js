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


app.controller('loginController', function($scope, $http, $location){
    $scope.login = function() {
        $http.post('/login', {username: $scope.username, password: $scope.password}).
            then(function (response) {
                if(response.status == 401){
                    $scope.message = "Incorrect username or password";
                    $scope.errClass = true;
                } else {
                    $location.path('/home');
                }
            });
    }
});

app.controller('registerController', function($scope, $http, $location){
    $scope.register = function() {
        if ($scope.password != $scope.confirmPassword) {
            $scope.message = "passwords do not match";
        } else {
            $http.post('/register', {username: $scope.username, password: $scope.password}).
                then(function (response) {
                    if (response.data == "Exists") {
                        $scope.message = "user already exists";
                        $scope.errClass = true;
                    } else {
                        $location.path('/login');
                    }
                });
        }
    }
});