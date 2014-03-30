happinessApp.factory('loginService', ['$http', function($http) {
    return {
        login: function(user) {
            return $http.post('/login', user);
        }
    };
}]);

happinessApp.factory('questionsService', ['$http', function($http) {
    return {
        submit: function(questions) {
            return $http.post('/api/submit', {
                user: null,
                questions: questions
            });
        }
    };
}]);