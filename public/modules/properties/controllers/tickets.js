'use strict';

angular.module('mean.properties').controller('TicketsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Tickets',
    function($scope, $stateParams, $location, Authentication, Tickets) {
        $scope.authentication = Authentication;

        $scope.addTicket = function(property,ticket) {

            if (!property.updated) {
                property.updated = [];
            }
            property.tickets.push()
            property.updated.push(new Date().getTime());

            property.$update(function() {
                $location.path('properties/' + property._id);
            });
        };
    }
]);