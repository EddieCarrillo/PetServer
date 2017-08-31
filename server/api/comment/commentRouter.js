var express = require("express");
var commentController = require("./commentController");

var router = express.Router();

router.param('id', commentController.param);

router.route('/')
.get(commentController.get)
.post(commentController.post)

router.route('/:id')
.get(commentController.getId)





module.exports = router;
