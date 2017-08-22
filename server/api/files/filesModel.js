var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var filesSchema = new Schema({
  name: {
    type: String,
    required: true  
  }
});

module.exports = mongoose.model('files', filesSchema);
