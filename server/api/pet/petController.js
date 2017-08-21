var Pet = require('./petModel');
var _ = require('lodash');







exports.param = function(req, res, next, id){
  Pet.findOne({_id: id}, function(err, pet){
    if(err){
      console.log(err);
      res.status(400).json();
    }else if(!pet){
      console.log("Could not find the user.")
      res.status(400).json();
    }else{
      res.pet = pet;
      next();
    }
  });
}

exports.get = function(req, res){
  Pet.find({}, function (err, pets){
    if (err){
      console.log("ERROR", err.message);
      res.status(400).json();
    }else if (!pets){
      console.log("No pets found!!!");
      res.status(400).json();
    }else{
      console.log("Return list of pets", pets);
      res.status(200).json(pets);
    }
  });
}

exports.getId =   function(req, res, next){
  console.log("returns a pet represented by its id");
  res.json(res.pet);
}

exports.put = function(req, res){
  var pet = res.pet
  var update = req.body;

  _.merge(pet, update);
  console.log(pet);

  pet.save(function(err, pet){
    if (err){
      console.log("Error", err.message);
      res.status(400).json();
    }else if (!pet){
      console.log("Not able to find pet");
      res.status(400).json();
    }else{
      console.log("Update the pet");
      res.status(200).json(pet);
    }
  })

}

exports.post = function(req, res){
  var newPet = req.body;

  Pet.create(newPet, function(err, createdPet){
    if (err){
      console.log("ERROR", err.message);
      res.status(400).json();
    }else if (!createdPet){
      console.log("Could not create a pet!")
      res.status()
    }else{
      res.status(201).json(createdPet);
    }
  })
}
