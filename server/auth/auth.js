var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt')
var config = require('../config/config')
var checkValidToken = expressJwt({secret: config.secrets.jwt});
var User = require('../api/user/userModel');

exports.decodeToken = function(){
  return function(req, res, next){

    //Uncomment if you want to use query parameters
    // if (req.query && req.query.hasOwnProperty('access_token')) {
    //   req.headers.authorization = 'Bearer ' + req.query.access_token;
    // }
    checkValidToken(req, res ,next)
  }
}


exports.getFreshUser = function(){
  return function(req, res, next){

  }

}




exports.verifyUser = function(req, res, next){
  return function(req, res, next){
    var user = req.user
    var username = user.username
    var password = user.password


    if (!username || !password){
      console.log("Missing username and/or password")
    return  res.status(400).send("Missing username and/or password");
    }

    User.find(user, function(err, foundUser){
      if (err){
        console.log('Could not find user!')
      }
    })


  }
}


exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresIn: config.expireTime}
  );
};
