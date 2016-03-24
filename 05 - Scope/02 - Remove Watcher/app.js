var app = angular.module('app', []);

app.controller('MainController', function($scope) {

  $scope.num = 0
  $scope.nums = []

  $scope.increment = function() {
    $scope.num++;
  }

  // $scope.$watch('num', function() {
  // 	$scope.nums.push($scope.num)
  // })

  // $scope.breakit = $scope.$watch('num', function() {
  //   $scope.nums.push($scope.num)
  // })
  
  // // When you call the $watch() method, AngularJS
  // returns an unbind function that will kill the
  // $watch() listener when its called.
  // var killWatcher = $scope.$watch('num', function() {
  //   $scope.nums.push($scope.num)
  //   if ($scope.num === 10) killWatcher()
  // })

});