happinessApp.controller('mainCtrl', ['$scope',
    function($scope) {

    }]);

happinessApp.controller('loginCtrl', ['$scope', '$window', '$location', 'loginService',
    function($scope, $window, $location, loginService) {
        $scope.login = function() {
            var successCallback = function(data, status, headers, config) {
                $window.sessionStorage.token = data.token;
                $location.path('/questions');
            };

            var errorCallback = function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;
                $scope.loginError = 'Invalid username or password';
            };

            loginService.login($scope.user)
                .success(successCallback)
                .error(errorCallback);
        };

        $scope.logout = function() {
            delete $scope.user.password;
            delete $scope.loginMessage;
            delete $window.sessionStorage.token;
            $location.path('/login');
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

