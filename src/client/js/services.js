happinessApp.factory('loginService', ['$http', function($http) {
    return {
        login: function(user) {
            return $http.post('/login', user);
        }
    };
}]);