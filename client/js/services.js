happinessApp.factory('authService', ['$http', '$window', function($http, $window) {
    return {
        login: function(user) {
            return $http.post('/login', $.param(user), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        },

        logout: function() {

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

happinessApp.factory('authInterceptor', ['$q', '$window', function ($q, $window) {
    return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },
        response: function(response) {
            if (response.status === 401) {
                $location.path('/login');
            }
            return response || $q.when(response);
        }
    };
}]);