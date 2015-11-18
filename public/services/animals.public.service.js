angular.module('animals').factory('Animals', ['$resource', function($resource) {
    return $resource('/api/animals/:animalId', {
        animalId: '@_id'
    }, {
        update: {
            method: 'PUT'
        },
    });
}]);