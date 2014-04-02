'use strict';

//Properties service used for articles REST endpoint
angular.module('mean.properties')
    .factory('Properties', ['$resource', function($resource) {
    return $resource('properties/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('PropertiesByUser', ['$resource',
	function($resource){
		console.log('hello');
		return $resource('properties/user/:userID',{}, {
			query: {method:'GET', params:{userID:'userID'}, isArray:true}
		});
	}]);