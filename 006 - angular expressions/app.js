(function(angular) {
	'use strict';
	var myApp = angular.module('countryApp', []);

	myApp.controller('CountryCtrl', ['$scope', function($scope) {
		$scope.countries = [
			{"name": "China", "population": 1359821000},
			{"name": "India", "population": 1205625000},
			{"name": "United States of America", "population": 312247000}
		];
	}]);
})(window.angular);