(function(angular) {
	'use strict';
	var myApp = angular.module('myApp', []);

	myApp.controller('NameCtrl', ['$scope', function($scope) {
	    $scope.firstName = "Jhon";
	    $scope.lastName = "Smith";
	}]);
})(window.angular);