var app = angular.module('stefancox', []);
app.controller('myCtrl', ['$scope', '$interval',
  function($scope, $interval) {
    console.log("Starting angular")
    $scope.tabView = "home"
    $scope.switch = function(active) {
      console.log("switching to " + active)
      $('#'+$scope.tabView+'Li').removeClass('active')
      $scope.tabView = active
      $('#'+active+'Li').addClass('active')
    }
    $scope.images = [
      {
        "src": "http://placehold.it/200x300"
      },
      {
        "src": "http://placekitten.com/350/150"
      }
    ]
    $scope.count = 0
    $scope.gallerySrc = $scope.images[$scope.count].src
    console.log("gallery = " + $scope.gallerySrc)
    $scope.nextImage = function() {
      if($scope.count == $scope.images.length - 1){
        $scope.count = 0
      }else {
      $scope.count = $scope.count + 1
    }
      $scope.gallerySrc = $scope.images[$scope.count].src
    }

    $scope.previousImage = function() {
      if($scope.count == 0){
        $scope.count = $scope.images.length - 1
      }else{
      $scope.count = $scope.count - 1
    }
      $scope.gallerySrc = $scope.images[$scope.count].src
    }
  }
])
