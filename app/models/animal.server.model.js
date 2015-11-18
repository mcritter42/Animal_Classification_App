var mongoose = require("mongoose"), Schema = mongoose.Schema;

var AnimalSchema =  new Schema({
    commonName: {
        type: String,
        required: 'Must input a Commom Name'
    },
    scientificName: {
        type: String,
        required: 'Must input a Scientific Name'
    },
    Class: {
        type: String,
        required: 'Must input a Class'
    },
    order: {
        type: String,
        required: 'Must input an Order'
    },
    family: {
        type: String,
        required: 'Must input a Family'
    },
    Char: {
        type: String,
        required: 'Must input some Characteristics'
    },
    Img: {
        type: String,
        required: 'Must input an img'
    }
});


mongoose.model('Animal', AnimalSchema);