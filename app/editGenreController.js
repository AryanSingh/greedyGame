(function() {

  angular
    .module('greedyGame')
    .controller('editGenreController',['$scope','genreService','$location', function($scope,genreService,$location){

 		$scope.name = genreService.curGenre.name;
 		$scope.id = genreService.curGenre.id;
 		$scope.submitForm = function(){
 			genreService.fetchResource.save({id:$scope.id},{"name":$scope.name}, function(){
 				$location.path('/allGenre');
 			},function(){
 				console.log('track could not be edited');
 			});
 		}
  

  }])

})();

