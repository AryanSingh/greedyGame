(function() {

  angular
    .module('greedyGame')
    .controller('addTrackController',['$scope','trackService','$location', function($scope,trackService,$location){

 		$scope.title ='';
 		$scope.rating = '';
 		$scope.genre = '';
 		$scope.genres = [];

 		$scope.submitForm = function(){
 			$scope.genres.push($scope.genre);
 			var newGenre = { "title":$scope.title, "rating":$scope.rating, "genres":$scope.genres };
 			trackService.fetchResource.save(newGenre, function(){
 				$location.path('/allTracks');
 			},function(){
 				console.log('track could not be created');
 			});
 		}
  

  }])

})();