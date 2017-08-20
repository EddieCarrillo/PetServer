

exports.param = function(req, res, next, id){
  req.id = id;
  console.log("Got path param id")
  next();
}

exports.get = function(req, res){
  console.log("returns all the comments associated with a post using where query param");
  res.json();
}

exports.getId = function(req, res){
  console.log("returns a comment represented by its id");
  res.json();
}

exports.post = function(req, res){
  console.log("Creates a new comment associated with a post user where query param");
  res.json();
}
