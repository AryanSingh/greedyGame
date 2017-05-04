(function() {

  angular
    .module('greedyGame')
    .controller('allTrackController',['$scope','trackService','$location','$route','$resource', function($scope,trackService,$location,$route,$resource){

 	trackService.fetchResource.get(function(result, responseHeaders){
 		$scope.tracks = result.results
 		$scope.nextUrl = result.next;
 		$scope.prevUrl = result.prev;
 		getPageId($scope.nextUrl,$scope.prevUrl);
 		console.log($scope.tracks)
 	});

 	$scope.go = function(path){
 		$location.path(path)
 	};
 	$scope.searchTrack = '';
 	$scope.nextUrl = '';
 	$scope.prevUrl = '';

 	$scope.newSearch = function(){
 		var newSearchUrl = 'http://104.197.128.152:8000/v1/tracks?title=' + ($scope.searchTrack).split(' ').join('%20');
 		var newTracks = $resource(newSearchUrl);
 		console.log(newSearchUrl);
 		newTracks.get(function(result,responseHeaders){
 			$scope.tracks = result.results;
 			$scope.nextUrl = result.next;
 			$scope.prevUrl = result.previous;
 		})
 	}

 	$scope.clearSearch = function(){
 		$scope.searchTrack = '';
 		$route.reload();
 	}


 	getPageId = function(url,altUrl){

 		if(url){
 			$scope.nextPageId = parseInt(url.split('=')[1]);
 			$scope.currentPageId = $scope.nextPageId - 1 ;
 			$scope.prevPageId = $scope.nextPageId - 2 ;
 		}
 		else{
 			$scope.prevPageId = parseInt(altUrl.split('=')[1]);
 			$scope.currentPageId = $scope.nextPageId + 1 ;
 		}
 		
 	}

 	$scope.nextPageId = '';
 	$scope.prevPageId = ''
 	$scope.directTrack = function (track){
 		trackService.curTrack = track;
 		$location.path('/editTrack');
    }


    $scope.newPage = function(){
    	var newResource = $resource($scope.nextUrl);
    	newResource.get(function(result, responseHeaders){
    		$scope.nextUrl = result.next;
    		$scope.prevUrl = result.previous;
	 		$scope.tracks = result.results;
	 		getPageId($scope.nextUrl,$scope.prevUrl)
	 		console.log($scope.tracks)
	 	});
    }
    $scope.oldPage = function(){
    	var newResource = $resource($scope.prevUrl);
    	newResource.get(function(result, responseHeaders){
    		$scope.nextUrl = result.next;
    		$scope.prevUrl = result.previous;
	 		$scope.tracks = result.results;
	 		getPageId($scope.nextUrl,$scope.prevUrl)
	 		console.log($scope.tracks)
	 	});
    }
  

  }])

})();
