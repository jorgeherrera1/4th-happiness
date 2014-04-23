happinessApp.factory('authService', ['$http', '$window', function($http, $window) {
    return {
        login: function(user) {
            return $http.post('/login', user);
        },

        logout: function(user) {

        },

        isLoggedIn: function() {
            if ($window.sessionStorage.token) {
                return true;
            }

            return false;
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