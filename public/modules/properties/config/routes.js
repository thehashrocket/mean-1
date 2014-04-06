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
//      state('editProperty', {
//          url: '/properties/:propertyId/edit',
//          templateUrl: 'modules/properties/views/edit.html'
//      }).
//		state('createProperty', {
//			url: '/properties/create',
//			templateUrl: 'modules/properties/views/create.html'
//		}).
		state('viewProperty', {
			url: '/properties/:propertyId',
			templateUrl: 'modules/properties/views/view.html'
		});
	}
]);