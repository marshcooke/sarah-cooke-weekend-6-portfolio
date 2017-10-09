var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
      .when('/aboutme', {
      templateUrl: '/views/aboutme.html',
      controller: 'UserController as uc',
    }).when('/aboutcode', {
      templateUrl: '/views/aboutcode.html',
      controller: 'UserController as uc',
    }).when('/home', {
      templateUrl: '/views/index.html',
      controller: 'UserController as uc',
    }).otherwise('/', {
      templateUrl: '/views/index.html',
      controller: 'UserController as uc',
    });
});