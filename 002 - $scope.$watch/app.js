(function(angular) {
	'use strict';
	var myApp = angular.module('myApp', []);

	myApp.controller('NameCtrl', ['$scope', function($scope) {
	    $scope.firstName = "Jhon";
	    
	    $scope.$watch('lastName',function(newValue, oldValue){
	    	console.log('new value is ' + newValue);
	    });
	    setTimeout(function(){
	    	$scope.lastName = 'Smith';
	    	$scope.$apply();
	    },1000);
	}]);
})(window.angular);