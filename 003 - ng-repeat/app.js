(function(angular) {
	'use strict';
	var myApp = angular.module('myApp', []);

	myApp.controller('NameCtrl', ['$scope', function($scope) {
		$scope.names = ['Yenny','Camilo','Carlos'];
	}]);
})(window.angular);