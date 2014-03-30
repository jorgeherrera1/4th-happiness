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

happinessApp.controller('questionsCtrl', ['$scope', 'questionsService',
    function($scope, questionsService) {
        // defauts
        $scope.questions = {
            howHappyAreYouInYourTeam: 1,
            howHappyAreYouWithTheCompany: 1,
            whatMakesYouFeelBest: '',
            whatMakesYouFeelWorst: '',
            whatWouldIncreaseYourHappiness: ''
        };

        $scope.submit = function() {
            var successCallback = function() {

            };

            var errorCallback = function() {

            };

            questionsService.submit($scope.questions)
                .success(successCallback)
                .error(errorCallback);
        }
    }]);

