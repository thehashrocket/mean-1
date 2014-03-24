'use strict';

//Setting up route
angular.module('mean.properties').config(['$stateProvider',
	function($stateProvider) {
		// Properties state routing
		$stateProvider.
		state('listProperties', {
			url: '/properties',
			templateUrl: 'modules/properties/views/list.html'
		}).
		state('viewProperty', {
			url: '/properties/:propertyId',
			templateUrl: 'modules/properties/views/view.html'
		});
	}
]);