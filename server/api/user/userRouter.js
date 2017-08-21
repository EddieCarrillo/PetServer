var express = require('express');
var router = express.Router();
var userController = require('./userController');

router.param('id', userController.param);

router.get('/',userController.get );

router.get('/:id',userController.getId);

router.post('/', userController.post);

module.exports = router
