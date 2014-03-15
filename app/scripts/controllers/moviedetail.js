'use strict';

angular.module('pelitweets').controller('MovieDetailController',
	function MovieDetailController($scope, $http, $routeParams, $location) {
		$http.get('/api/movie/'+ $routeParams.movieId).
			success(function(data, status, headers, config) {
				if(data) {
					$scope.movie = data;
				} else {
					$location.path('/');
				}
			});
	}
);
