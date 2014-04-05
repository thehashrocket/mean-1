'use strict';

//Properties service used for articles REST endpoint
angular.module('mean.properties')
    .factory('Tickets', ['$resource',
    function($resource){
    return $resource('properties/tickets/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);