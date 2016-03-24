var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.mydata = {val: "jake"}

  // $scope.$watch('mydata.val', function() {
  // 	console.log('something changed')
  // })
  
  // $scope.$watch('mydata.val', function(newval, oldval) {
  // 	if (newval === oldval) {
  // 		return false
  // 	} 
  // 	console.log('something changed')
  // })

  // $scope.$watch('mydata.val',function(newval) {
  //   $scope.mydata.toolong = newval.length > 15
  // })
  
})
