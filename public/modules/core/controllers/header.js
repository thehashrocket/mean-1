'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication','Properties'
	function($scope, Authentication, Properties) {
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