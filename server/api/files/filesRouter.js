var express = require('express');
var router = express.Router();
var idRouter = express.Router();

var filesController = require('./filesController');
var multer = require('multer');
var stream  = require('stream');
var upload = multer();
var gfs = require('../../db').gridfs;


idRouter.param('id', filesController.param);
idRouter.get('/:id', filesController.get);

router.use('/id', idRouter)


router.post('/upload', upload.single('file'), filesController.upload)



module.exports = router
