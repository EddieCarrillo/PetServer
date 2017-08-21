var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var postSchema = new Schema({
  likes: Number,
  caption: {
    type: String,
    required: true
  },
  likedBy: {
    type: Schema.Types.Mixed,
    default: {}
  },
  media: {
    type: Schema.Types.ObjectId,
    ref: 'files',
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'pet'
  },

});


module.exports = mongoose.model('post', postSchema);
