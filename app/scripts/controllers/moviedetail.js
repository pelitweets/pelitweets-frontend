'use strict';

pelitweets.controller('MovieDetailController', ['$scope', '$http', '$routeParams', '$location',
  function ($scope, $http, $routeParams, $location) {
    $http.get('http://pelitweets.herokuapp.com/api/movie/'+ $routeParams.movieId).
      success(function(data) {
        if(data) {
          $scope.movie = data;
        } else {
          $location.path('/');
        }
      });
  }]);
