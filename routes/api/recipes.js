var express = require('express');
var router = express.Router();
var recipesCtrl = require('../../controllers/recipes');

// router.use(require('../../config/auth'));
router.post('/', recipesCtrl.create);
// router.get('/addpage', recipesCtrl.index);
router.get('/viewpage/:id', recipesCtrl.recipeList);




function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;