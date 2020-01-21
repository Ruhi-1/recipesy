const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var IngredientsSchema = new mongoose.Schema ({
    text: {
        type: String
    },
});

var RecipesSchema = new mongoose.Schema ({
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