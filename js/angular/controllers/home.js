define(['app', 'scribeInput', 'toTrusted'], function(app) {

  app.controller('HomeController', ['$scope', '$sce', '$http', function($scope, $sce, $http) {

    // var bucket = 'dillytilde'
    var bucket = 'testBucket111'

    $scope.message = {
      text: ''
    }

    $scope.submitClick = function() {
      $scope.message.time = Date.now();
      $sce.trustAsHtml($scope.message.text);
      postMessage($scope.message);
      $scope.messages.push($scope.message);
      $scope.message = { text: '' };
    }

    function postMessage(message) {
      debugger;
      message = angular.toJson(message);
      var url = 'http://tilde-club-db.appspot.com/put/buckets/' + bucket + '/' + message + '?callback=JSON_CALLBACK'
      $http.jsonp(url).success(function(response) {
        console.log(response);
      }) 
    }

    function fetchMessages() {
      var url = 'http://tilde-club-db.appspot.com/get/buckets/' + bucket + '/?callback=JSON_CALLBACK'
      $http.jsonp(url).success(function(messages) {
        $scope.messages = messages;
      })
    }

    $scope.emptyFilter = function(message) {
      return message.text !== ''
    }

    fetchMessages();

    
  }])

})

