'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;

        $scope.findOne = function() {
            Users.get({
                userId: Authentication.user._id
            }, function(user) {
                $scope.user = user;
            });
        };

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