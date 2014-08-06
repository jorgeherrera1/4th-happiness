happinessApp.factory('questionsService', ['$http', function($http) {
    return {
        submit: function(questions) {
            return $http.post('/api/submit', {
                questions: questions
            });
        }
    };
}]);