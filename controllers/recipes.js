const Recipe = require('../models/recipe');
const User = require('../models/user');

module.export = {
    create
}

function create(req, res, next) {
    User.findById(req.user).exec(function(err, user) {
        user.recipes.push(req.body);
        user.save(function (err) {
            if (err) return next (err);
            res.redirect('/viewpage');
        });
    });
}