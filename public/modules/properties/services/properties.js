'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.properties').factory('Properties', ['$resource', function($resource) {
    return $resource('properties/:propertyId', {
        articleId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);