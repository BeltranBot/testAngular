(function(angular) {
	'use strict';
	var myApp = angular.module('myApp', []);

	myApp.controller('NameCtrl', ['$scope', function($scope) {
		$scope.names = ['Yenny','Camilo','Carlos'];
		$scope.addName = function(){
			var i = getIndex($scope.enteredName);
			if (i == -1) {
				$scope.names.push($scope.enteredName);
				$scope.enteredName = "";
			}			
		};
		$scope.removeName = function(name){
			var i = getIndex(name);
			$scope.names.splice(i,1);
		};
		function getIndex(name){
			return $scope.names.indexOf(name);
		}
	}]);
})(window.angular);