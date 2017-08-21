exports.param = function(req, res, next, id){
  console.log("Path param present: " + id );
  req.id = id;
  next();
}

exports.get = function(req, res){
  console.log("returns all public posts");
  res.json();
}


exports.getId = function(req, res){

  console.log("returns a post represented by its it id");
  res.json();
}


exports.post = function(req, res){
  console.log("Create a new posts and return it back to the client")
  res.json();
}
