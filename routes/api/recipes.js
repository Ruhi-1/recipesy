var router = require('express').Router();
var recipesCtrl = require('../../controllers/recipes');

router.post('/addpage',recipesCtrl.create);

module.exports = router;