var express = require("express");
var commentController = require("./commentController");
var decodeToken = require('../../auth/auth').decodeToken;
var getFreshUser = require('../../auth/auth').getFreshUser;
var queryExtractor = require('../../middleware.js').prepareQuery

var router = express.Router();

router.param('id', commentController.param);

router.route('/')
.get(queryExtractor(), commentController.get)
.post(decodeToken(), getFreshUser(), commentController.post)

router.route('/:id')
.get(commentController.getId)





module.exports = router;
