'use strict';

angular.module('properties').controller('PropertiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Properties','PropertiesByUser',
    function($scope, $stateParams, $location, Authentication, Properties, PropertiesByUser) {
        $scope.authentication = Authentication;

        $scope.addTicket = function(property,ticket) {

            property = $scope.property;
            if (!property.updated) {
                property.updated = [];
            }
            property.tickets.push(ticket);
            property.updated.push(new Date().getTime());

            property.$update(function() {
                $location.path('properties/' + property._id);
            });
        };

        $scope.create = function() {
            var property = new Properties({
                businessName: this.businessName,
                streetAddress: this.streetAddress,
                city: this.city,
                state: this.state,
                zip: this.zip,
                mdu: this.mdu,
                units: this.units,
                content: this.content,
                userID: Authentication.user._id
            });
            property.$save(function(response) {
                $location.path('properties/' + response._id);
            });

            this.businessName = '';
            this.streetAddress = '';
            this.city = '';
            this.state = '';
            this.zip = '';
            this.mdu = '';
            this.units = '';
            this.content = '';
            this.userID = '';
        };

        $scope.remove = function(property) {
            if (property) {
                property.$remove();

                for (var i in $scope.properties) {
                    if ($scope.properties[i] === property) {
                        $scope.properties.splice(i, 1);
                    }
                }
            } else {
                $scope.property.$remove(function() {
                    $location.path('properties');
                });
            }
        };

        $scope.update = function() {
            var property = $scope.property;
            if (!property.updated) {
                property.updated = [];
            }
            property.updated.push(new Date().getTime());

            property.$update(function() {
                $location.path('properties/' + property._id);
            });
        };

        $scope.find = function() {
            Properties.query(function(properties) {
                $scope.properties = properties;
            });
        };

        $scope.findPropertyByUser = function() {
			PropertiesByUser.get({userID: Authentication.user._id},
			function(OwnerProperty) {
				$scope.hasProperty = OwnerProperty;
			});
        };

        $scope.findOne = function() {
            Properties.get({
                propertyId: $stateParams.propertyId
            }, function(property) {
                $scope.property = property;
            });
        };
    }
]);