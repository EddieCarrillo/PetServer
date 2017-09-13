var express = require('express');
var router = express.Router();
var userController = require('./userController');
var auth = require('../../auth/auth');
var idRouter = express.Router()








//id sub route
idRouter.param('id', userController.param);
idRouter.get('/:id',userController.getId);

router.use('/id', idRouter)

router.route('/')
.get(userController.get)
.post(userController.post)



module.exports = router
