var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true
  },

  text: {
    type: String,
    required: true
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'pet',
    required: true
  }
});


module.exports = mongoose.model('comment', commentSchema);
