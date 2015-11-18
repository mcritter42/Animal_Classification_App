angular.module('animals').config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/animals/create', {
        templateUrl: '/public/views/newAnimal.html',
    }).when('/', {
        templateUrl: '/public/views/index.html'
    }).when('/animals', {
        templateUrl: '/public/views/display-animals.html'
    }).when('/animals/:animalId', {
        templateUrl: '/public/views/viewAnimal.html'
    }).when('/animals/:animalId/edit', {
        templateUrl: '/public/views/editAnimal.html'
    });
    }
]);