'use strict';

angular.module('mean.users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users',
    function($scope, $stateParams, $location, Authentication, Users) {

        $scope.authentication = Authentication;

        $scope.find = function() {
            Users.query(function(users) {
                $scope.users = users;
            });
        };

        $scope.findOne = function() {
            Users.get({
                userId: $stateParams.userId
            }, function(user) {
                $scope.user = user;
                $scope.isBusiness = user.propertyYes;
            });
        };
    }
]);