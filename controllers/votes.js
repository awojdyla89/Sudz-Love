const Post = require("../models/post");

module.exports = {
  create,
  deleteVote,
};

async function create(req, res) {
  try {
    const post = await Post.findById(req.params.id);
    post.votes.push({ username: req.user.username, userId: req.user._id }); //mutating a document
    await post.save(); // save it
    res.status(201).json({ data: "VOTE added!!" });
  } catch (err) {
    res.json({ data: err });
  }
}

async function deleteVote(req, res) {
  try {
    const post = await Post.findOne({
      "votes._id": req.params.id,
      "votes.username": req.user.username,
    });
    post.votes.remove(req.params.id); // mutating a document
    // req.params.id is the like id
    await post.save(); // after you mutate a document you must save
    res.json({ data: "VOTE removed!!" });
  } catch (err) {
    res.json({ error: err });
  }
}
