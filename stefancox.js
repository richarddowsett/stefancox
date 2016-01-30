var app = angular.module('stefancox', []);
app.controller('myCtrl', ['$scope', '$interval',
  function($scope, $interval) {
    console.log("Starting angular")
    $scope.tabView = "home"
    $scope.switch = function(active) {
      console.log("switching to " + active)
      $scope.tabView = active
    }
    $scope.images = [
      {
        "src": "http://placehold.it/350x150"
      },
      {
        "src": "http://placekitten.com/350/150"
      }
    ]
    $scope.gallerySrc = $scope.images[0].src
    console.log("gallery = " + $scope.gallerySrc)
  }
])
