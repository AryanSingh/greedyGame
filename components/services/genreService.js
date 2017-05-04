(function(){
	angular
	.module('greedyGame')
	.factory('genreService',['$resource',function($resource){
		var curGenre = {};
		var fetchResource = (function(){
			return $resource(
				'http://104.197.128.152:8000/v1/genres/:id',
				{id:"@id"},
				{
					update: {
						method: 'PUT'
					}
				}
			);
		})();
		return {
			curGenre: curGenre,
			fetchResource: fetchResource
		}
		
	}])
})();