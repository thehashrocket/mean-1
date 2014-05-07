'use strict';


angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','Properties', 'UserProperties',
	function($scope, Authentication, Menus, UserProperties) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

        $scope.userTickets = function() {

            UserProperties.query(function(properties) {

                $scope.properties = properties;

                $scope.size = window._.size(properties);

                $scope.hasTickets = function() {

                    var count = 0;

                    angular.forEach($scope.properties, function(property){

                        if(property.userID === Authentication.user._id) {

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

                        }



                    });

                    return count;

                };

                $scope.testFunction = function(variable) {

                    return window._.size(variable);

                };

            });

        };
	}
]);