var User = require('./userModel');

exports.param = function(req, res, next, id){
  User.findOne({_id: id}, function(err, user){
    if (err){
      console.log(err);
      res.status(400).json();
    }else if (!user){
      console.log("Could not find user with id.");
      res.status(400).json();
    }else{
      res.user = user
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

exports.getId =  function(req, res){
  res.json(res.user);
}

exports.post = function(req, res){
  User.create(req.body, function(err, user){
    if (err){
      console.log(err);
      res.status(400).json();
    }else if (!user){
      console.log("Could not create user");
      res.status(400).json();
    }else{
      res.status(201).json(user);
    }
  });

}
