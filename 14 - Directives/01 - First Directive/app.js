var app = angular.module('app', []);

app.controller('MainController', function($scope) {
  $scope.photo = {url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Downtown_San_Francisco_-_March_2013.jpg",
                  date:"March 10th, 2013"}
})

app.directive('photo', function() {
  return {
    restrict: 'E',

    template: '<figure><img width="500px"/><figcaption/></figure>',
    replace: true,

    link: function(scope, element, attrs) {
      attrs.$observe('caption', function(value) {
        element.find('figcaption').text(value)
      })

      attrs.$observe('photoSrc', function(value) {
        element.find('img').attr('src', value)
      })
    }
  }
})

// app.directive('photo', function() {
//     return {
//         restrict: 'E',
//         templateUrl: "photo.html",
//         replace: true,
//         scope: {
//             caption: '@',
//             photoSrc: '@'
//         }
//     }
// })

// Common directive types:
// 
// myDirective
// 
// <my-directive></my-directive>
// <div mydirective></div>
// <div class="my-directive"></div>
// <!-- my-directive -->
// 