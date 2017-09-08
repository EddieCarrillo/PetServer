var express = require("express");
var commentController = require("./commentController");
var decodeToken = require('../../auth/auth').decodeToken;
var getFreshUser = require('../../auth/auth').getFreshUser;
var queryExtractor = require('../../middleware.js').prepareQuery

var router = express.Router();
var idRouter = express.Router();

idRouter.param('id/id', commentController.param);

idRouter.route('/:id')
.get(commentController.getId)

router.use('/id', idRouter)



router.route('/')
.get(queryExtractor(), commentController.get)
.post(decodeToken(), getFreshUser(), commentController.post)







module.exports = router;
