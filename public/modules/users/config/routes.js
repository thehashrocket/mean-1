'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/profile.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/password.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/signup.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/signin.html'
		}).
        state('editProfile', {
            url: '/users/:userId/edit',
            templateUrl: 'modules/users/views/edit.html'
        }).
        state('listUserProperties', {
            url: '/users/properties',
            templateUrl: 'modules/users/views/properties/list.html'
        }).
        state('createUserProperty', {
            url: '/users/properties/create',
            templateUrl: 'modules/users/views/properties/create.html'
        }).
        state('viewUserProperty', {
            url: '/users/properties/:propertyId',
            templateUrl: 'modules/users/views/properties/view.html'
        }).
        state('editUserProperty', {
            url: '/users/properties/:propertyId/edit',
            templateUrl: 'modules/users/views/properties/edit.html'
        });
	}
]);