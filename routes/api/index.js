var router = require('express').Router();
var indexCtrl = require('../../controllers/index');

router.get('/homepage', indexCtrl.index);

module.exports = router;