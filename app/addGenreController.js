(function() {

  angular
    .module('greedyGame')
    .controller('addGenreController',['$scope','genreService','$location', function($scope,genreService,$location){
    	$scope.name = '';

    	$scope.submitForm = function(){
    		var newGenre = { "name": $scope.name }
    		genreService.fetchResource.save(newGenre,function(){
    			$location.path('/allGenre');
    		},function(){
    			console.log('genre could not be created');
    		});
    	}
 
  

  }])

})();
