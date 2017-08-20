var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
  console.log("returns all public pets");
  res.json();
});

router.get('/:id', function(req, res){
  console.log("returns a pet represented by its id: " + req.params.id);
  res.json();
});



router.put('/:id', function(req, res){
  console.log("Update the pet with the id of..." + id);
  res.json();
});

router.post('/', function(req, res){
  console.log("Creates and retuns a new pet using the posted object as the pet");
  res.json();
});



module.exports = router;
