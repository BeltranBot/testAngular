(function(angular) {
	'use strict';
	var countryApp = angular.module('countryApp', []);

	countryApp.controller('CountryCtrl', ['$scope','$http', function($scope, $http) {
			$http.get('countries.json').success(function(data){
				$scope.countries = data;
			});
		}]);
})(window.angular);