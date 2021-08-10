const mongoose = require("mongoose");

const votesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId },
});

const postSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    photoUrl: String,
    favBeer: String,
    abv: String,
    beerType: String,
    aboutBeer: String,
    postedDate: Date,
    votes: [votesSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
