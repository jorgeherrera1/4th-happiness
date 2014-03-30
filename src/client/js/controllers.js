happinessApp.controller('loginCtrl', ['$scope', '$rootScope', '$http', '$location', 'loginService',
    function($scope, $rootScope, $http, $location, loginService) {
        $scope.login = function() {
            var successCallback = function(data, status, headers, config) {
                $location.path('/questions');
            };

            var errorCallback = function (data, status, headers, config) {

            };

            loginService.login($scope.user)
                .success(successCallback)
                .error(errorCallback);
        };
    }]);
