var happinessApp = angular.module('happinessApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'authCtrl'
            })
            .when('/questions', {
                templateUrl: 'views/questions.html',
                controller: 'questionsCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });
    }])
    .run(['$rootScope', '$location', 'authService', function($rootScope, $location, authService) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!authService.isLoggedIn()) {
                $location.path('/login');
            }
        });
    }]);
