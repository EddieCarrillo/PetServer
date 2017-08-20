
exports.param = function(req, res, next, id){
  req.id = id;
  console.log("id path param used!");
  if (id == 'me'){
    console.log("me path param used.")
  }
  next();
}

exports.get = function(req, res){
  console.log("returns all public pets");
  res.json();
}

exports.getId =   function(req, res, next){
  console.log("returns a pet represented by its id");
  res.json();
}

exports.put = function(req, res){
  console.log("Update the pet with the id of..." + req.id);
  res.json();
}

exports.post = function(req, res){
  console.log("Creates and retuns a new pet using the posted object as the pet");
  res.json();
}
