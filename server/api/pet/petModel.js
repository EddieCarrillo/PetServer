var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },

  image: {
    type: Schema.Types.ObjectId,
    ref: 'files'
  },

  likedPosts: {
    type: Schema.Types.Mixed,
    default: {}
  },

  followers: {
    type: Schema.Types.Mixed,
    default: {}
  },

  followersCount: Number,

  following: {
    type: Schema.Types.Mixed,
    default: {}
  },

  followingCount: Number,

  species: String,

  breed: String,

  longBio: String,

  weight: Number,

  height: Number,

  age: Number,

  longBio: String

});


module.exports = mongoose.model('pet', petSchema);
