// slide 16 - activities detail
var app = angular.module('fitnessApp', []);
app.controller('fitnessController', function ($scope, $http) {
	$scope.comments = [];
	angular.element(document).ready(function () {
		$scope.getComment();
	});
	// create comment
	$scope.addComment = function () {
		$http.post('/comment', {text: $scope.comment})
			.then(function (data) {
				$scope.comments = data.data;
			});
	};
	// get all comments for activity
	// need to get id of activity -- from activities detail page
	$scope.getComment = function () {
		$http.get('/comment/'+ id).then(function (data) {
			$scope.comments = data.data;
		});
	};
	// delete comment by id
	$scope.deleteComment = function (id) {
		$http.delete('/comment/'+ id)
			.then(function (data) {
				$scope.comments = data.data;
			});
	};

	$scope.showBlock = function() {

		$scope.blockVisible = true;

	};

	$scope.hideBlock = function() {

		$scope.showVisible = false;
	};

	$scope.blockUser = function(id) {
		//
		// need to know if blocking is in users route or comment route
		//$http.post('/').then(function(data) {
		// 		$scope.comments = data.data;
		// })

	};
});

// slide 17 - comments list - logged in
// create comment
// delete comment (orig poster, postee)

// slide 18 - comments list - block user

