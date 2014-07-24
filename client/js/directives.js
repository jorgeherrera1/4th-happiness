happinessApp.directive('happinessRating', function() {
    return {
        restrict: 'A',
        scope: {
            rating: '=ngModel'
        },
        templateUrl: 'views/rating.html',
        replace: true,
        controller: ['$scope', function($scope) {
            $scope.rating = $scope.rating || 1;

            $scope.resolveClass = function(currentStar) {
                return $scope.rating >= currentStar ? 'glyphicon-star' : 'glyphicon-star-empty';
            };

            $scope.setRating = function(rating) {
                $scope.rating = rating;
                $scope.$apply();
            };
        }],
        link: function(scope, elem, attrs) {
            angular.forEach(elem.children(), function(star, index) {
                $(star).click(function() {
                    var rating = index + 1; // index is zero based

                    scope.setRating(rating);
                });
            });
        }
    }
});