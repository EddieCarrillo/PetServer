var express = require("express");

var router = express.Router();

router.get('/', function(req, res){
  console.log("returns all public posts");
  res.json();
});

router.get('/:id', function(req, res){
  console.log("returns a post represented by its it id");
  res.json();
});

router.get('/me', function(req, res){
  console.log("returns all the posts associated with the current user logged in.");
});

router.post('/', function(req, res){
  console.log("Create a new posts and return it back to the client")
});


module.exports = router;
