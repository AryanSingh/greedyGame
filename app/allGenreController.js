(function() {

  angular
    .module('greedyGame')
    .controller('allGenreController',['$scope','genreService','$location','$resource', function($scope,genreService,$location,$resource){
    console.log('apple')
 	genreService.fetchResource.get(function(result, responseHeaders){
 		$scope.genres = result.results;
 		$scope.nextUrl = result.next;
 		$scope.prevUrl = result.prev;
 		getPageId($scope.nextUrl,$scope.prevUrl);
 		console.log($scope.genres);
 	});
  
  	$scope.go = function(path){
 		$location.path(path)
 	};

 	$scope.nextUrl = '';
 	$scope.prevUrl = '';

 	
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
 	$scope.prevPageId = '';

 	$scope.directGenre = function (genre){
 		genreService.curGenre = genre;
 		$location.path('/editGenre');
    }

    $scope.newPage = function(){
    	var newResource = $resource($scope.nextUrl);
    	newResource.get(function(result, responseHeaders){
    		$scope.nextUrl = result.next;
    		$scope.prevUrl = result.previous;
	 		$scope.genres = result.results;
	 		getPageId($scope.nextUrl,$scope.prevUrl)
	 		console.log($scope.genres)
	 	});
    }
    $scope.oldPage = function(){
    	var newResource = $resource($scope.prevUrl);
    	newResource.get(function(result, responseHeaders){
    		$scope.nextUrl = result.next;
    		$scope.prevUrl = result.previous;
	 		$scope.genres = result.results;
	 		getPageId($scope.nextUrl,$scope.prevUrl)
	 		console.log($scope.genres)
	 	});
    }
  



  }])

})();

