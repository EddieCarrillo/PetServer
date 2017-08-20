var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
  console.log("returns all the comments associated with a post using where query param");
  res.json();
});

router.get('/:id', function(req, res){
  console.log("returns a comment represented by its id");
  res.json();
});

router.post('/', function(req, res){
  console.log("Creates a new comment associated with a post user where query param");
  res.json();
});

module.exports = router;
