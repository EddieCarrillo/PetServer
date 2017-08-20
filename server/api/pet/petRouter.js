var express = require('express');
var router = express.Router();
var petController = require('./petController');


router.param('id', petController.param);

router.get('/', petController.get);

router.get('/:id', petController.getId);

router.put('/:id', petController.put);

router.post('/', petController.post);



module.exports = router;
