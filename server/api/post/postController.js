var Post = require('./postModel');

exports.param = function(req, res, next, id){
  Post.findOne({_id: id}, function(err, post){
    if (err){
      console.log("ERROR", err);
      res.status(400).json();
    }else if (!post){
      console.log("Could not find the post");
      res.status(400).json();
    }else{
      req.post = post;
      next();
    }
  })

}

exports.get = function(req, res){
  Post.find({}, function(err,posts){
    if (err){
      console.log("ERROR", err);
      res.status(400).json();
    }else if (!posts){
      console.log("Could not find posts");
      res.status(400).json();
    }else{
      console.log(posts);
      res.status(200).json(posts);
    }
  })
}


exports.getId = function(req, res){
  console.log('post returned', req.post)
  res.json(req.post);
}


exports.post = function(req, res){

  Post.create(req.body, function(err, post){
    if (err){
      console.log(err.message)
      res.status(400).json();
    }else if (!post){
      console.log("Could not create a post");
      res.status(400).json();
    }else{
      console.log("Created a new post");
      res.status(201).json(post);
    }
  });
}
