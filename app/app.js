/**
 * 
 * AngularJS Boilerplate
 * @description           Description
 * @author                Jozef Butko // www.jozefbutko.com/resume
 * @url                   www.jozefbutko.com
 * @version               1.1.7
 * @date                  March 2015
 * @license               MIT
 * 
 */
(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('greedyGame', [
      'ngRoute', 'ngResource', 'ngRateIt'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider', '$httpProvider', '$compileProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   * 
   */
  function config($routeProvider, $locationProvider, $httpProvider, $compileProvider) {

    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/allTrack.html',
        controller: 'allTrackController',
        
      })
      .when('/addTrack', {
        templateUrl: 'views/addTrack.html',
        controller: 'addTrackController',
        
      })
      .when('/editTrack',{
        templateUrl: 'views/editTrack.html',
        controller: 'editTrackController',

      })
      .when('/allGenre', {
        templateUrl: 'views/allGenre.html',
        controller: 'allGenreController',
        
      })
      .when('/editGenre', {
        templateUrl: 'views/editGenre.html',
        controller: 'editGenreController',
        
      })
      .when('/addGenre', {
        templateUrl: 'views/addGenre.html',
        controller: 'addGenreController',
        
      })
      
      .otherwise({
        redirectTo: '/'
      });

    

  }


  /**
   * You can intercept any request or response inside authInterceptor
   * or handle what should happend on 40x, 50x errors
   * 
   */
  

  
  /**
   * Run block
   */
  angular
    .module('greedyGame')
    .run(run);

  run.$inject = ['$rootScope', '$location'];

  function run($rootScope, $location) {

    // put here everything that you need to run on page load

  }


})();