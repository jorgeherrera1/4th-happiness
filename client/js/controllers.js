happinessApp.controller('questionsCtrl', ['$scope', '$location', 'questionsService',
    function($scope, $location, questionsService) {
        // defauts
        $scope.questions = {
            howHappyAreYouInYourTeam: 1,
            howHappyAreYouWithTheCompany: 1,
            whatMakesYouFeelBest: '',
            whatMakesYouFeelWorst: '',
            whatWouldIncreaseYourHappiness: ''
        };

        $scope.submit = function() {
            var cb = function() {
                $location.path('/thanks');
            };

            questionsService.submit($scope.questions)
                .success(cb);
        }
    }]);

