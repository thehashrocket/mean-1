'use strict';

//Setting up route
angular.module('mean.properties').config(['$stateProvider',
	function($stateProvider) {
		// Properties state routing
		$stateProvider.
		state('listProperties', {
			url: '/property',
			templateUrl: 'modules/properties/views/list.html'
		}).
		state('viewProperty', {
			url: '/property/:propertyId',
			templateUrl: 'modules/properties/views/view.html'
		});
	}
]);