(function() {


  'use strict';

  
  angular.module('greedyGame')
    .directive('myTrack', myTrack);


  function myTrack() {

    // Definition of directive
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: 'components/directives/my-track.html',
      
    };

    return directiveDefinitionObject;
  }


})();
