var Animal = require("mongoose").model('Animal');

var getErrorMessage = function(err) 
{
    if (err.error) {
        for (var errName in err.error)
        {
            if(err.error[errName].message)
            return err.error[errName].message;
            }
        } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res)
{
    var animal =  new Animal(req.body);
    animal.save(function(err) {
        if (err) {
            return res.status(400).send({
                message:getErrorMessage(err)
            });
        } else {
            res.json(animal);
        }
    });
};

exports.list = function(req, res) {
    Animal.find().sort('-Class')
    .populate('commomName', 'commomName')
     .exec(function(err, animals){
         console.log(err);
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(animals);
        }
    });
};

exports.animalByID = function(req, res, next, id) {
    Animal.findById(id)
    .exec(function(err, animal) {
        if (err) return next (err);
        if(!animal) return next(new Error ('failed to load animal' + id));
        req.animal = animal;
        next();
    });
};

exports.read = function(req, res) 
{
    res.json(req.animal);
};

exports.update = function(req, res) 
{
    var animal = req.animal;
    animal.commomName = req.body.commomName;
    animal.scientificName = req.body.scientificName;
    animal.Class = req.body.Class;
    animal.order = req.body.order;
    animal.family = req.body.family;
    animal.Char = req.body.Char;
    animal.img = req.body.Img;
    
    animal.save(function(err)
    {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            return res.json(animal);
        }
    });
};

exports.delete = function(req, res) 
{
    var animal = req.animal;
    
    animal.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(animal);
        }
    });
};