var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log("Get all the public users");
  res.json();
});

router.get('/:id', function(req, res){
  console.log("Return a user with id: " + req.params.id);
  res.json();
});

router.post('/', function(req, res){
  console.log("Create a new user");
  res.json();
});

module.exports = router
