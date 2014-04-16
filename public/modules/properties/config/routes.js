'use strict';

//Setting up route
<<<<<<< HEAD
angular.module('mean.properties').config(['$stateProvider',
=======
angular.module('properties').config(['$stateProvider',

>>>>>>> 9755c95e3fb3375fa377e4f6efa5f88ade97413b
	function($stateProvider) {
		// Properties state routing
		$stateProvider.
		state('listProperties', {
			url: '/properties',
			templateUrl: 'modules/properties/views/list.html'
		}).
<<<<<<< HEAD
=======
//      state('editProperty', {
//          url: '/properties/:propertyId/edit',
//          templateUrl: 'modules/properties/views/edit.html'
//      }).
//		state('createProperty', {
//			url: '/properties/create',
//			templateUrl: 'modules/properties/views/create.html'
//		}).
>>>>>>> 9755c95e3fb3375fa377e4f6efa5f88ade97413b
		state('viewProperty', {
			url: '/properties/:propertyId',
			templateUrl: 'modules/properties/views/view.html'
		});
	}
]);