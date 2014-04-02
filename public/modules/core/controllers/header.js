'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication','Properties'
	function($scope, Authentication, Properties) {
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

        $scope.findPropertyByUser = function() {
            Properties.get({
                userID: Authentication.user._id
            }, function(property) {
                $scope.hasProperty = property;
            });
        };

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};
	}
]);