'use strict';

//Setting up route
angular.module('mean.properties').config(['$stateProvider',
	function($stateProvider) {
		// Articles state routing
		$stateProvider.
		state('listProperties', {
			url: '/property',
			templateUrl: 'modules/properties/views/list.html'
		}).
		state('createProperty', {
			url: '/property/create',
			templateUrl: 'modules/properties/views/create.html'
		}).
		state('viewProperty', {
			url: '/property/:propertyId',
			templateUrl: 'modules/properties/views/view.html'
		}).
		state('editProperty', {
			url: '/property/:propertyId/edit',
			templateUrl: 'modules/properties/views/edit.html'
		});
	}
]);