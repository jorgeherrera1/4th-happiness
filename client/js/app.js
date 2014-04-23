var happinessApp = angular.module('happinessApp', ['ngRoute'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
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

        $httpProvider.interceptors.push('authInterceptor');
    }])
    .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window) {
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (!$window.sessionStorage.token) {
                $location.path('/login');
            }
        });
    }]);
