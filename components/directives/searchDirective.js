(function() {


  'use strict';

  
  angular.module('greedyGame')
    .directive('mySearch', mySearch);


  function mySearch() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/my-search.html',
      
    };

    return directiveDefinitionObject;
  }


})();
