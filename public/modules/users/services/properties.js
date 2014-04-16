'use strict';

//Properties service used for articles REST endpoint
<<<<<<< HEAD
angular.module('mean.users')
=======
angular.module('users')
>>>>>>> 8b54f081057a7d511a6aa507417e603aa0b5fc23
    .factory('UserProperties', ['$resource', function($resource) {
    return $resource('users/properties/:propertyId', {
        propertyId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
<<<<<<< HEAD
}])
=======
}]);
>>>>>>> 8b54f081057a7d511a6aa507417e603aa0b5fc23
