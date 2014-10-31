define(['app'], function(app) {

  app.controller('BirthdayController', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.name = $routeParams.name

    var setImage = function() {
      if ($routeParams.name === "Brittany") {
        $scope.image = 'https://s3-us-west-2.amazonaws.com/misc-stuff-idk/532560_3143688915868_436974211_n.jpg'
      } else {
        $scope.image = 'https://s3-us-west-2.amazonaws.com/misc-stuff-idk/10495569_10202513871148054_6635838772700690405_o.jpg'
      }
    }

    setImage();

  }])
})