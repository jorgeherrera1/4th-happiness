var happinessApp = angular.module('happinessApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/login'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginCtrl'
            })
            .when('/questions', {
                templateUrl: 'views/questions.html',
                controller: 'questionsCtrl'
            })
    }]);
