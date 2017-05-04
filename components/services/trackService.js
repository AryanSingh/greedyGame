(function(){
	angular
	.module('greedyGame')
	.factory('trackService',['$resource',function($resource){
		var curTrack = {};
		var fetchResource = (function(){
			return $resource(
				'http://104.197.128.152:8000/v1/tracks/:id',
				{id:"@id"},
				{
					update: {
						method: 'PUT'
					}
				}
			);
		})();
		return {
			curTrack: curTrack,
			fetchResource: fetchResource
		}
		
	}])
})();