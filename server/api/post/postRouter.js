var express = require("express");
var router = express.Router();
var postController = require('./postController')

router.param('id', postController.param)
router.get('/:id', postController.getId);

router.route('/')
.get(postController.getId)
.post(postController.post)


module.exports = router;
