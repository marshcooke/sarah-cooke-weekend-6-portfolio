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
    })
    // will work this up in the next phase to feature solo/group/hackday projects
    // .when('/featured', {
    //   templateUrl: '/views/featured.html',
    //   controller: 'RepoController as RC',
    // })
    .otherwise('/', {
      templateUrl: '/views/index.html',
      controller: 'UserController as UC',
    });
});
