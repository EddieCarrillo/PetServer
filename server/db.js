
var mongoose = require('mongoose');
var User = require('./api/user/userModel')
var Pet = require('./api/pet/petModel')
var Post = require('./api/post/postModel')
var Comment = require('./api/comment/commentModel')


var Grid = require('gridfs-stream');

//Connect to db
var connect = mongoose.connect('mongodb://localhost/myapp');

var connection = mongoose.connection;

connection.on('open', function(){
  //dropDatabase(seedDatabase)

})
//Connect grid and mongo
Grid.mongo = mongoose.mongo

function generalPetHandler(){
  return function(err, pet){
    if (err){
      console.log('You should restart seeding process. Something went wrong', err.message)
    }else if (!pet){
      console.log('You should restart seeding process. Something went wrong')
    }else{
      console.log('Created pet: ', pet.name)
    }
  }
}

function generalUserHandler(petName){

  return function (err, owner ){
    if (err){
      console.log('You should restart seeding process. Something went wrong', err.message)
    }else if (!owner){
      console.log('You should restart seeding process. Something went wrong')
    }else{
      console.log('Created user: ', owner.username, 'with password: ', owner.password)
      Pet.create({name: petName, owner: owner}, generalPetHandler());
    }
  }
}

function dropDatabase(seedDatabase){
  connect.connection.db.dropDatabase(function(err, result){
    if (err){
      console.log('Trouble dropping the database')
    }else if (!result){
      console.log('You should restart seeding process. Something went wrong');

    }else {
      console.log('Dropped database')
        seedDatabase()

    }
  });
}

function seedDatabase(){
  console.log('Seed database')
  var username1 = 'JonRogawski'
  var username2 = 'calcmaster827'
  var username3 = 'JamesBond'

  var petname1 = 'Lemon'
  var petname2 = 'Jenkins'
  var petname3 = 'spike'

  var password1 = 'Mathprof123'
  var password2 = 'secondedition428'
  var password3 = 'suitsntie007'

  var user1 = new User({username: username1, password: password1});
  var user2 = new User({username: username2, password: password2});
  var user3 = new User({username: username3, password: password3});

  user1.encryptPassword(password1, generalEncryptHandler(user1, petname1));
  user2.encryptPassword(password2, generalEncryptHandler(user2, petname2));
  user3.encryptPassword(password3, generalEncryptHandler(user3, petname3));





}


function generalEncryptHandler(user, petName){

    return function (err, hashedPassword, salt){
      if (err){
        console.log("Could not encrypt password");
      return ;
      }
      //Store hashed and salted pw in database
      user.password = hashedPassword
      //Save the user to db after encrypting user
      user.save(function(err, user){
        if (err) {
          console.log("Error saving user to db.", err);
        return  ;
      }else{
        console.log("Succesfully created user")
        console.log('Creating pet... ',petName );
        Pet.create({name: petName, owner: user}, generalPetHandler());

      }

    })
    }

}

//Create connection to database and Grid
exports.gridfs = Grid(connection.db)
