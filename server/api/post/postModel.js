var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
  likes: Number,

  caption: {
    type: String,
    required: false
  },

  likedBy: {
    type: Schema.Types.Mixed,
    default: {}
  },

  media: {
    type: Schema.Types.ObjectId,
    ref: 'files',
    required: false
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: 'pet',
    required: false
  }

});


module.exports = mongoose.model('post', postSchema);
