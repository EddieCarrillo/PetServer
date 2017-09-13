var express = require('express');
var router = express.Router();
var User = require('../api/user/userModel')
var controller = require('./controller')
var decodeToken = require('./auth').decodeToken
var verifyUser = require('./auth').verifyUser
var getFreshUser = require('./auth').getFreshUser

var extractToken  = function(){



	return function(req, res, next){
		//If the token was received then put it as the authorization header
	if (req.body){
		console.log("req.body: " + JSON.stringify(req.body))
		var token = req.body.token
		if (token){
			console.log("token: " + token)
			req.headers.authorization = 'Bearer ' + token
		}else {
			res.status(401).send('Could not find token field')
		}
	}else {
		res.status(401).send('Could not get the response body')
	}
	    next()


	   }
	}
	

//Req.user will be there from middleware
router.post('/login', verifyUser(), controller.login );

//
router.post('/checkValidToken', extractToken(), decodeToken(), getFreshUser(), controller.checkValidToken)



module.exports = router
