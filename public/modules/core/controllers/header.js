'use strict';

angular.module('mean.core').controller('HeaderController', ['$scope', 'Authentication', 'Users',
	function($scope, Authentication, Users) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;

		$scope.menu = [{
			title: 'Articles',
			link: 'articles',
			uiRoute: '/articles'
		}, {
			title: 'New Article',
			link: 'articles/create',
			uiRoute: '/articles/create'
		}];

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
	}
]);