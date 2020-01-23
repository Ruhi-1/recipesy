//const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    create,
    recipeList,
}

async function recipeList(req, res) {
    try {
        const recipe = await Recipe.findOne({ recipe: req.body.recipe });
        return res.status(201).json(recipe);
    } catch (err) {
        return res.status(401).json(err);
    }
    }

async function create(req, res) {
    try {
        const user = await User.findOne({ email: req.body.userEmail });
        // console.log("**********")
        // console.log({title: req.body.recipe.title, description: req.body.recipe.description, ingredients: req.body.recipe.ingredients[{text}]});
        // console.log("**********")
        user.recipes.push({title: req.body.recipe.title, description: req.body.recipe.description, ingredients: [{text: 'aaa'}]});
        await user.save();
        return res.status(201).json(user.recipes[user.recipes.length - 1]);
    } catch (err) {
      // Error
        console.log(err);
        res.status(400).json(err);
    }
    }

