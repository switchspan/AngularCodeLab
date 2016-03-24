var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  //$scope.classVar = "orange"
  $scope.canUseOrange = true

  $scope.changeIt = function() {
  	return true;
  }
})
