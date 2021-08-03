const express = require('express');
const router = express.Router();
const votesCtrl = require('../../controllers/votes')

router.post('/posts/:id/votes', votesCtrl.create)
router.delete('/votes/:id', votesCtrl.deleteVote)

module.exports = router;