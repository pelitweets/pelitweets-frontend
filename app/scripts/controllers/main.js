'use strict';

angular.module('pelitweets').controller('MainController',
	function MainController($scope, $rootScope, $window, $location) {
		$scope.slide = '';
		$rootScope.back = function() {
			$scope.slide = 'slide-right';
			$window.history.back();
		}
		$rootScope.go = function(path) {
			$scope.slide = 'slide-left';
			$location.url(path);
		}
	}
);
