(function() {


  'use strict';

  
  angular.module('greedyGame')
    .directive('myGenre', myGenre);


  function myGenre() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/my-genre.html',
      
    };

    return directiveDefinitionObject;
  }


})();
