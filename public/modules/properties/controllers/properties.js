'use strict';

angular.module('mean.properties').controller('PropertiesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Properties',
    function($scope, $stateParams, $location, Authentication, Properties) {
        $scope.authentication = Authentication;

        $scope.create = function() {
            var property = new Properties({
                title: this.title,
                content: this.content
            });
            property.$save(function(response) {
                $location.path('properties/' + response._id);
            });

            this.title = '';
            this.content = '';
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

        $scope.findOne = function() {
            Properties.get({
                propertyId: $stateParams.propertyId
            }, function(property) {
                $scope.property = property;
            });
        };
    }
]);