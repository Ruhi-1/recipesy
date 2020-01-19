const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var IngredientsSchema = new mongoos.Schema ({
    text: {
        type: String
    },
});

var RecipesSchema = new mongoos.Schema ({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    ingredients: [IngredientsSchema]
});

module.exports = mongoose.model('Recipes', RecipesSchema)