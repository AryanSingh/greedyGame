(function() {

  angular
    .module('greedyGame')
    .controller('editTrackController',['$scope','trackService','$location', function($scope,trackService,$location){

 		$scope.title = trackService.curTrack.title;
 		$scope.rating = parseInt(trackService.curTrack.rating);

 		if(trackService.curTrack.genres[0] ){
 			$scope.genre = trackService.curTrack.genres[0].name;
 		}
 		else{
 			$scope.genre = '';
 		}
 		
 		$scope.genres = trackService.curTrack.genres;
 		$scope.id = trackService.curTrack.id;

 		$scope.submitForm = function(){
 			
 			$scope.genres.push($scope.genre);
 			var newGenre = { "title":$scope.title, "rating":$scope.rating, "genres":$scope.genres };
 			trackService.curTrack = {};
 			trackService.fetchResource.save({id:$scope.id},newGenre, function(){
 				$location.path('/allTracks');
 			},function(){
 				console.log('user could not be saved');
 			});
 			
 		}
  
  }])

})();