var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
      .when('/aboutme', {
      templateUrl: '/views/aboutme.html',
      controller: 'UserController as UC',
    }).when('/aboutcode', {
      templateUrl: '/views/aboutcode.html',
      controller: 'RepoController as RC',
    }).when('/home', {
      templateUrl: '/views/index.html',
      controller: 'UserController as UC',
    }).otherwise('/', {
      templateUrl: '/views/index.html',
      controller: 'UserController as UC',
    });
});