var User = require('../api/user/userModel');
var signToken = require('./auth').signToken
 var config = require('../config/config')



exports.login = function(req, res, next){
//Send back a token if user is verifu
  var token = signToken(req.user._id)	
  res.json({token: token})


}

exports.checkValidToken = function(req, res, next){
	res.status(200).send(req.user)
}
