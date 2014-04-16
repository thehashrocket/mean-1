'use strict';

angular.module('users').controller('UsersPropertiesController', ['$scope', '$filter', '$stateParams', '$location', 'Authentication', 'UserProperties','PropertiesByUser','Properties',
    function($scope, $filter, $stateParams, $location, Authentication, UserProperties, PropertiesByUser) {

        $scope.authentication = Authentication;

        $scope.addTicket = function(property,ticket) {
            property = $scope.property;
            if (!property.updated) {
                property.updated = [];
            }
            property.tickets.push(ticket);
            property.updated.push(new Date().getTime());

            property.$update(function() {
                $location.path('users/properties/' + property._id);
            });
        };

        $scope.create = function() {
            var property = new UserProperties({
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
                $location.path('users/properties/' + response._id);
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
                    $location.path('users/properties');
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
                $location.path('users/properties/' + property._id);
            });
        };

        $scope.find = function() {
            UserProperties.query(function(properties) {

                $scope.properties = properties;

                $scope.size = window._.size(properties);

                $scope.hasTickets = function() {

                    var count = 0;
                    angular.forEach($scope.properties, function(property){

                        angular.forEach(property, function(value, key) {

                            if(key === 'tickets') {

                                angular.forEach(value, function(value, key) {

                                    angular.forEach(value, function(value, key) {
                                        if (key === '_id' && value !== '') {
                                            count += 1;
                                        }

                                    });

                                });

                            }

                        });

                    });

                    return count;

                };

                $scope.testFunction = function(variable) {

                    return window._.size(variable);

                };

            });
        };

        $scope.findPropertyByUser = function() {
			PropertiesByUser.get({userID: Authentication.user._id},
			function(OwnerProperty) {
				$scope.hasProperty = OwnerProperty;
			});
        };

        $scope.selectedStudentsCount = function() {
            var count = 0;
            angular.forEach($scope.students, function(student){
                count += student.isSelected ? 1 : 0;
            });
            return count;
        };

        $scope.findOne = function() {
            UserProperties.get({
                propertyId: $stateParams.propertyId
            }, function(property) {
                $scope.property = property;
            });
        };
    }
]);