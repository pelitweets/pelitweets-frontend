'use strict';

pelitweets.controller('MovieListController', ['$scope', '$http', function ($scope, $http) {

  $http.get('http://pelitweets.herokuapp.com/api/movies')
    .success(function(data) {
      if(data) {
        $scope.movies = data;
      }
    });
}]);
