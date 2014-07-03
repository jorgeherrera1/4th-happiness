happinessApp.controller('mainCtrl', ['$scope', '$window', '$location',
    function($scope, $window, $location) {
        $scope.loggedInUser = '';

        $scope.logout = function() {
            delete $window.sessionStorage.token;
            $scope.loggedInUser = '';

            $location.path('/login');
        };
    }]);

happinessApp.controller('authCtrl', ['$scope', '$window', '$location', 'authService',
    function($scope, $window, $location, authService) {
        $scope.loginError = '';

        $scope.login = function() {
            var successCallback = function(data, status, headers, config) {
                $window.sessionStorage.token = data.token;

                $scope.loginError = '';
                $scope.$parent.loggedInUser = $scope.user.email;

                $location.path('/questions');
            };

            var errorCallback = function (data, status, headers, config) {
                // Erase the token if the user fails to log in
                delete $window.sessionStorage.token;

                $scope.loginError = 'Invalid email or password';
                $scope.$parent.loggedInUser = '';
            };

            authService.login($scope.user)
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

