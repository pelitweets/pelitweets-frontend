'use strict';

angular.module('pelitweets').controller('MovieListController',
	function MovieListController($scope, $http, $routeParams, $location) {
		$http.get('http://pelitweets-dev.herokuapp.com/api/movies').
			success(function(data, status, headers, config) {
				if(data) {
					$scope.movies = data;
				}
			});
	}
);
