

exports.param = function(req, res, next, id){
  console.log("Path param found: " + id);
  res.json();
}


exports.get = function(req, res){
  console.log("Get all the public users");
  res.json();
}

exports.getId =  function(req, res){
  console.log("Return a user with id: " + req.params.id);
  res.json();
}

exports.post = function(req, res){
  console.log("Create a new user");
  res.json();
}
