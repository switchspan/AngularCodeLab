var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  //$scope.myarr = [1,2,3,4,5]

  // Primatives are not keyed!
  //$scope.myarr = [1,2,3,4,5,5,6,7,8,9]

  //$scope.myarr = ["foo","bar","bar","baz"]

  //$scope.ob = {name: "mike", age:35, title:"Mr."}

  // Objects are keyed automatically with identity...
  $scope.users = [{name:"mike",age:23},{name:"andy",age:34},{name:"reid",age:45},{name:"reid",age:45}]
})
