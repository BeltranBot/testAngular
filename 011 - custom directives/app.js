// countryApp module
angular.module('countryApp', [
  'ngRoute',
  'countryControllers',
  'countriesFactory',
  'countryDirective'
]).config(['$routeProvider',function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'country-list.html',
      controller: 'CountryListCtrl'
    }).
    when('/:countryId', {
      templateUrl: 'country-detail.html',
      controller: 'CountryDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);