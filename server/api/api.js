var express = require('express');
var router = express.Router();

var userRouter = require('./user/userRouter');
var petRouter = require('./pet/petRouter');
var postRouter = require('./post/postRouter');
var commentRouter = require('./comment/commentRouter');
var fileRouter = require('./files/filesRouter');


router.use('/users', userRouter);
router.use('/pets', petRouter);
router.use('/posts', postRouter);
router.use('/pets', petRouter);
router.use('/comments', commentRouter);
router.use('/files', fileRouter); 


module.exports = router
