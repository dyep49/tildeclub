define(['angularAMD', 'angular-route'], function(angularAMD) {

  var app = angular.module('app', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/', angularAMD.route({
        templateUrl : 'templates/home.html',
        controller : 'HomeController'
      }))
      .otherwise({
        redirectTo: '/'
      });
  });

  return angularAMD.bootstrap(app);


})

