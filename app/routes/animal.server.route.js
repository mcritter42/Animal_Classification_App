var animals = require('../controllers/animal.server.controller');

module.exports = function(app) {
    app.route('/api/animals')
    .get(animals.list)
    .post(animals.create);
    
    app.route('/api/animals/:animalId')
    .get(animals.read)
    .put(animals.update)
    .delete(animals.delete);
    
    app.param('animalId', animals.animalByID);
    
};
