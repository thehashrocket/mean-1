'use strict';

angular.module('mean.core').controller('HeaderController', ['$scope', 'Authentication', 'Users', 'Properties',
	function($scope, Authentication, Users, Properties) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;

		$scope.menu = [{
            title: 'Properties',
            link: 'properties',
            uiRoute: '/properties'
        }];

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
	}
]);