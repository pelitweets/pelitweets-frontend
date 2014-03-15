'use strict';

angular.module('pelitweets', [
  'ngResource',
  'ngRoute'
])
  .config([
    '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../views/movie-list.html',
				  controller: 'MovieListController'
			  }).
			  when('/:movieId', {
				  templateUrl: '../views/movie-detail.html',
				  controller: 'MovieDetailController'
			  }).
			  otherwise({
				  redirectTo: '/'
			  });
	  }
  ]);
