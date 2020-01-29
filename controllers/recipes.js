//const Recipe = require('../models/recipe');
const User = require('../models/user');
// const userFieldsSelect = 'local.username';

module.exports = {
    create,
    index,
    delete: deleteRecipe,
    update
}

//delete a single recipe
async function deleteRecipe(req, res) {
    try {
        const reci =  await Recipe.findOne({ email: req.body.userEmail });
        res.status(200).json(reci)
        console.log('wwwwwwwwwwwwwwwwww')
        console.log(reci)
        console.log('wwwwwwwwwwwwwwwwww')
        await user.recipes.id(req.params.id).remove();
        await reci.save();
        return res.status(201).json(user.friends);
    } catch (err) {
        res.status(400).json(err);
    }
}

//update a single recipe
async function update(req, res) {
    try {
        await Recipe.findByIdAndUpdate(req.params.id, req.body);
    }
    catch (err) {
        res.json({ err });
    }

}

// async function index(req, res) {
//     try {
//         const recipe = await Recipe.find({});
//         res.status(200).json(recipe);
//         console.log('ssssssssssss')       
//         console.log(recipe)
//         console.log('ssssssssssss')
//     }
//     catch (err) {
//         res.json({ err });
//     }
// }

async function index(req, res) {
    const users = await User.find({});
    // console.log('user from controller',users)
    let recipes = []
    users.forEach(user => {
        if (user.recipes.length >0) {
            recipes.push(user.recipes)
        }
    })
        
        
        // console.log(`after the foreach`,recipes)
    


        
    // console.log(recipes)
    // console.log('ssssssssssss')
    //
    //console.log({ user: req.user._id })
    // console.log('ssssssssssss')
    res.status(200).json(recipes);
}

async function create(req, res) {
    // console.log('req body', req.body)
    try {
        
        const user = await User.findOne({ email: req.body.userEmail });
        // console.log("**********")
        // console.log(user)
        let rec = req.body.recipe
        // console.log("**********12345")
        user.recipes.push(rec);
        // user.recipes.push({recipe: req.body.recipe.description});
        // user.recipes.ingredients.push({recipe: req.body.recipe.ingredients});

        await user.save();
        return res.status(201).json(user.recipes[user.recipes.length - 1]);
    } catch (err) {
      // Error
        console.log(err);
        res.status(400).json(err);
    }
    }

