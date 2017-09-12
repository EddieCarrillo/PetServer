var User = require('./userModel');
var bcrypt = require('bcrypt');
var signToken = require('../../auth/auth').signToken;


exports.param = function(req, res, next, id){
  User.findOne({_id: id}, function(err, user){
    if (err){
      console.log(err);
      res.status(400).json();
    }else if (!user){
      console.log("Could not find user with id.");
      res.status(400).json();
    }else{
      req.user = user.toJson()
      next();
    }
  })
}


exports.get = function(req, res){
  User.find({}, function(err, users){
    if (err){
      console.log("ERROR",err);
      res.status(400).json();
    }else if (!users){
      console.log("Could not find users");
      res.status(400).json();
    }else{
      res.status(200).json(users);
    }
  })
}

exports.refreshUser = function(req, res){

  res.json(req.user)
}

exports.getId =  function(req, res){
  res.json(req.user);
}

exports.post = function(req, res){
  console.log(req.body)
  console.log("POST /users create user called")
  var user = new User(req.body);
  var username = user.username;
  var plainTextPassword = user.password;

//See if there was any username and password input
  if (!username || !plainTextPassword || username.length === 0 || plainTextPassword.length  === 0){
    res.status(400).json("Missing username or password");
  }

//If user and password is okay then encrypt the password
  user.encryptPassword(plainTextPassword, function(error, hashedPassword, salt){
    if (error){
      console.log("Could not encrypt password");
    return  res.status(400).json();
    }
    //Store hashed and salted pw in database
    user.password = hashedPassword
    //Save the user to db after encrypting user
    user.save(function(err, user){
      if (err) {
        console.log("Error saving user to db.", err);
      return  res.status(400).json();
      };
      console.log("Succefully created user")
      //Adter saving user give the user a login token
    var token =  signToken(user._id)
      res.status(201).json({token: token});
  })

  })


}
