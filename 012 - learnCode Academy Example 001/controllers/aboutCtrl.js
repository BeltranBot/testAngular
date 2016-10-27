// about Controller
angular
.module('app')
.controller('aboutCtrl',['$scope','Friends', function($scope, Friends){
	$scope.title = "About";
	$scope.items = ['thing1', 'thing2', 'thing3'];

}]);