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
      req.pet = pet;
      next();
    }
  });
}

exports.get = function(req, res){
  console.log("query: ", req.query)
  console.log("constraint: ", req.constraint)
  console.log("populate string: ", req.populate)
  Pet
  .find(req.constraint)
  .populate(req.populate)
  .exec(function (err, pets){
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
  console.log('GET /pets/:id called')
  if (req.pets){
    res.json(req.pets)
  }else {
    res.json(req.pet)
  }
}

exports.put = function(req, res){
  var pet = req.pet
  var update = req.body;
  console.log('PUT /pets/:id called')

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
  var user = req.user
  var newPet = req.body;
  newPet.owner = user._id

  Pet.create(newPet, function(err, createdPet){
    if (err){
      console.log("ERROR", err.message);
      res.status(400).send(err.message);
    }else if (!createdPet){
      console.log("Could not create a pet!")
      res.status(400).send("Could not create a pet")
    }else{
      res.status(201).json(createdPet);
    }
  })
}


exports.getMe = function(req, res, next){
  var user = req.user

  Pet.find({owner: user._id}, function(err, pets){
      if (err){
          console.log("ERROR", err.message)
          res.status(400).send(err.message)
      }else if (!pets){
        console.log("Could not find the pet")
        res.status(400).send("Could not find the pet")
      }else{
        console.log("Found pets", pets)
        res.json(pets)
      }

  })

}
