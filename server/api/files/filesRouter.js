var express = require('express');
var router = express.Router();
var filesController = require('./filesController');
var multer = require('multer');
var stream  = require('stream');
var upload = multer();
var gfs = require('../../db').gridfs;

router.post('/upload', upload.single('file'), filesController.upload)
router.param('fileName', filesController.param);
router.get('/:fileName', filesController.get);


module.exports = router
