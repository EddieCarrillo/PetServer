var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt')

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }


});

userSchema.methods  = {
  //Could return null value if salt or hash was unsuccesful
  //plainTextPassword - string
  //completionHandler -  callback (error, hashedPassword, salt)
  encryptPassword : function(plainTextPassword, completionHandler){
    var saltRounds = 8;
    var hashedPassword = null;
    bcrypt.genSalt(saltRounds, function(err, salt){
      if (err) {
         console.log("[ERROR]", "could not generate salt DO NOT SAVE");
         return completionHandler(err);
      }
      //IF I could generate salt then hashhhhh
      bcrypt.hash(plainTextPassword, saltRounds, function(err, hash){
        if (err) {
           console.log("[ERROR]", "could not generate hash DO NOT SAVE");
           return completionHandler(err, null)
        }
        completionHandler(null, hash, salt);
     })

   })}
   ,

   //plainTextPassword - String
   //onFinished - callback(err, result), err- Error, result - Bool
   authenticate : function(plainTextPassword, onFinished){
     //By this time password should be hashed already...
      bcrypt.compare(plainTextPassword, this.password, onFinished);

   },

   toJson: function(){
        var obj = this.toObject()
        delete obj.password
        return obj;
   }

  }




module.exports = mongoose.model('user', userSchema);
