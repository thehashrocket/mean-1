'use strict';

//Properties service used for articles REST endpoint
angular.module('properties')
    .factory('Properties', ['$resource', function($resource) {
    return $resource('properties/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('Tickets', ['$resource', function($resource){
    return $resource('properties/tickets/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('PropertiesByUser', ['$resource', function($resource) {
    return $resource('properties/user/:userID', {
        userID: 'userID'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]).factory('UserProperties', ['$resource', function($resource) {
        return $resource('users/properties/:propertyId', {
            propertyId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }]);
