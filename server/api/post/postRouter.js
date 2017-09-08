var express = require("express");
var router = express.Router();
var postController = require('./postController')

var decodeToken = require('../../auth/auth').decodeToken;
var getFreshUser = require('../../auth/auth').getFreshUser;
var queryExtractor = require('../../middleware.js').prepareQuery


var idRouter = express.Router()
idRouter.param('id', postController.param)
idRouter.get('/:id', postController.getId);

router.use('/id',idRouter)

router.route('/')
.get(queryExtractor(), postController.get)
.post(postController.post) //To be protected ......


module.exports = router;
