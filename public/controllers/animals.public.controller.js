angular.module('animals').controller('AnimalsController', ['$scope', '$routeParams', '$location', 'Animals', '$timeout', function($scope, $routeParams, $location, Animals, $timeout){

    
    $scope.create = function() {

      var animal = new Animals({
            commonName: this.commonName,
            scientificName: this.scientificName,
            Class: this.Class,
            order: this.order,
            family: this.family,
            Char: this.Char,
            Img: this.Img

      });
      animal.$save(function(response) {
          $location.path('/api/animals/:' + response._id);
      }, function(errorResponse) {
          $scope.error = errorResponse.data.message;
      });
    };
    
    $scope.find = function() {
      $scope.animals = Animals.query();
      console.log($scope.animals);
    };
    
    $scope.findOne = function() {
        $scope.animal = Animals.get({
            animalId: $routeParams.animalId
        });
    };
    
    $scope.update = function() {
        $scope.animal.$update(function() {
            console.log($scope);
            $location.path('/api/animals/:' + $scope.animal._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };
    
    $scope.delete = function(animal) {
        if (animal) {
            animal.$remove(function() {
                for (var i in $scope.animals) {
                    if ($scope.animals[i] === animal) {
                        $scope.animals.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.animal.$remove(function() {
                $location.path('animals');
            });
        }
    };
    
    
}]);