var express = require("express");
var router = express.Router();
var postController = require('./postController')

router.param('id', postController.param)
router.get('/', postController.get);
router.get('/:id', postController.getId);
router.post('/', postController.post);


module.exports = router;
