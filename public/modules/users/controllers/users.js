'use strict';

angular.module('mean.users').controller('UsersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Users',
    function($scope, $stateParams, $location, Authentication, Users) {

        $scope.authentication = Authentication;

        $scope.test = 'test content';

        $scope.tabs = [
            { title:'Dynamic Title 1', content: $scope.test },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                alert("You've selected the alert tab!");
            });
        };

        $scope.navType = 'pills';

        $scope.update = function() {
            var user = $scope.user;
            if (!user.updated) {
                user.updated = [];
            }
            user.updated.push(new Date().getTime());

            user.$update(function() {
                $location.path('users/' + user._id);
            });
        };

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