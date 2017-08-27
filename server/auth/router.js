var express = require('express');
var router = express.Router();
var User = require('../api/user/userModel')
var controller = require('./controller')
var verifyUser = require('./auth').verifyUser






//Req.user will be there from middleware
router.post('/login', verifyUser(), controller.login );



module.exports = router
