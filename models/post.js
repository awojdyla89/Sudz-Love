const mongoose = require('mongoose');

const votesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    photoUrl: String,
    caption: String,
    votes: [votesSchema]
  })
 

module.exports = mongoose.model('Post', postSchema);