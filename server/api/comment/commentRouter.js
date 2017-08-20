var express = require("express");
var commentController = require("./commentController");

var router = express.Router();

router.param('id', commentController.param);

router.get("/", commentController.get );

router.get('/:id', commentController.getId );

router.post('/', commentController.post);

module.exports = router;
