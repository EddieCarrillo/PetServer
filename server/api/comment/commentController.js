var Comment = require('./commentModel.js');

exports.param = function(req, res, next, id){
  Comment.findOne({_id: id}, function(err, comment){
    if(err){
      console.log(err);
      res.status(400).json();
    }else if(!comment){
      console.log("Could not find the user.")
      res.status(400).json();
    }else{
      req.comment = comment;
      next();
    }
  });
}

exports.get = function(req, res){
  Comment.find(req.constraint)
  .populate(req.populate)
  .exec(function (err, comments){
    if (err){
      console.log("ERROR", err.message);
      res.status(400).json();
    }else if (!comments){
      console.log("No comments found!!!");
      res.status(400).json();
    }else{
      console.log("Return list of comments", comments);
      res.status(200).json(comments);
    }
  });
}

exports.getId = function(req, res){
  console.log("returns a comment represented by its id");
  res.json(req.comment);
}

exports.post = function(req, res){
  Comment.create(req.body, function(err, createdComment){
    if (err){
      console.log("ERROR", err.message);
      res.status(400).json();
    }else if (!createdComment){
      console.log("Could not create a comment!")
      res.status()
    }else{
      res.status(201).json(createdComment);
      console.log(createdComment)
    }
  })
}
