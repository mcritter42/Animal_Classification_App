var mongoose = require("mongoose"), Schema = mongoose.Schema;

var AnimalSchema =  new Schema({
    commonName: {
        type: String
    },
    scientificName: {
        type: String
    },
    Class: {
        type: String
    },
    order: {
        type: String
    },
    family: {
        type: String
    },
    Char: {
        type: String
    },
    Img: {
        type: String
    }
});


mongoose.model('Animal', AnimalSchema);