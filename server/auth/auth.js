var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt')
var config = require('../config/config')
var checkValidToken = expressJwt({secret: config.secrets.jwt})
var User = require('../api/user/userModel')

exports.decodeToken = function(){
  return function(req, res, next){

    //Uncomment if you want to use query parameters
    // if (req.query && req.query.hasOwnProperty('access_token')) {
    //   req.headers.authorization = 'Bearer ' + req.query.access_token;
    // }
    console.log('decodeToken()')
    checkValidToken(req, res ,next)
  }
}


exports.getFreshUser = function(){
  return function(req, res, next){
    console.log('getFreshUser()')
    User.findById(req.user._id, function(err, user){
      if (err){
        console.log('ERROR', err.message);
        return res.status(400).send('Err finding user in database');
      }else if (!user){
        //Deleted user because weird stuff or asian with beard and ponytail trying to hack with jwt
        return res.status(400).send('User does not exist in the database');
      }else{
        req.user = user;
        next()
      }
    })


  }

}

//Checks to verify the username and password of the user
//If failure then sends back error status
//If succesful then next() is called.
exports.verifyUser = function(){
  return function(req, res, next){

    var user = req.body
    var username = user.username
    var plainTextPassword = user.password
    //console.log('verifyUser()')



    if (!username || !plainTextPassword){
      console.log("Missing username and/or password")
    return  res.status(400).send("Missing username and/or password");
    }

  User.findOne({username: username})
   .then(function(foundUser){
    if (!foundUser){
      res.status(400).send('No user with that username')
    }else{
      foundUser.authenticate(plainTextPassword, authenticateResultHandler(req,res, next, foundUser))
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


var authenticateResultHandler = function(req,res, next, user){
  return function(err, result){
    if (err){
      res.status(400).send('Error authenticate')
    }else if (!result){
      res.status(400).send('Bad password')
    }else{
      console.log('Good password  ')
      req.user = user
      next()
    }
  }
}
