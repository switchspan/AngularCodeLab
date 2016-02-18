var app = angular.module('app', []);

// 1st way (can't do in 1.5.0)
var MainController = function($scope) {
  $scope.val = "test123"
}

// 2nd way (what we use for learning)
// app.controller('MainController', function($scope) {
//   $scope.val = "test456"
// })

// Best way (what is preferred in production)
// angular.module('controllers', []).controller('MainController', function($scope) {
//   $scope.val = "test789"
// })
