var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.val = 1
  $scope.even = false

  $scope.inc = function() {
    $scope.val += 1
    $scope.even = $scope.val%2==0
  }

  // Not the best way! Using methods in state directives in view is BAD!
  $scope.isEven = function() {
  	return $scope.val%2==0 
  }
})
