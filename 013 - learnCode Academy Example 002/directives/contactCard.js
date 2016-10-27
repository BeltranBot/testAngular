// contactCard Directive
angular.module('app')
.directive('contactCard',function(){
	return {
		restrict: 'E',
		scope: {
			friend: '=',
			title: '='
		},
		replace: true,
		templateUrl: "./templates/directives/contactCard.html",
		link: function(scope, element, attr){
			console.log(attr.id);
			element.click(function(){
				alert('click');
			});
		},
		controller: function($scope){
			console.log($scope.friend);			
		}
	};
});
