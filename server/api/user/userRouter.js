var express = require('express');
var router = express.Router();
var userController = require('./userController');
var auth = require('../../auth/auth');







router.param('id', userController.param);
router.get('/:id',userController.getId);

router.route('/')
.get(userController.get)
.post(userController.post)



module.exports = router
