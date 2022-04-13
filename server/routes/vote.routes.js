const router = require('express').Router();
const vote = require('../controllers/vote.controller.js');
const authMiddleware = require('../middlewares/auth.middleware');

// User Routes
router.get('/upvote/:username', authMiddleware, vote.upvote);
router.get('/downvote/:username', authMiddleware, vote.downvote);
router.delete('/removevote/:username', authMiddleware, vote.remove);
router.get('/voteLogs', authMiddleware, vote.getVoteLogs);

module.exports = router;