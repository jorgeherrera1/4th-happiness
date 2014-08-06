var happinessApp = angular.module('happinessApp', ['ngRoute'])
    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/welcome.html'
            })
            .when('/questions', {
                templateUrl: 'views/questions.html',
                controller: 'questionsCtrl'
            })
            .when('/thanks', {
                templateUrl: 'views/thanks.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
