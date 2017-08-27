var User = require('../api/user/userModel');
var signToken = require('./auth').signToken



exports.login = function(req, res, next){
//Send back a token if user is verifu
  var token = signToken(req.user._id)
  res.json({token: token})


}
