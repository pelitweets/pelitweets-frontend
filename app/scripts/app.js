'use strict';

var pelitweets = angular.module('pelitweets', ['ngRoute']);

pelitweets.config(['$routeProvider', '$locationProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/movie-list.html',
		  controller: 'MovieListController'
	  }).
	  when('/:movieId', {
		  templateUrl: 'views/movie-detail.html',
		  controller: 'MovieDetailController'
	  }).
	  otherwise({
		  redirectTo: '/'
	  });

}]);
