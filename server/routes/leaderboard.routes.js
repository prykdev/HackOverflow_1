const router = require('express').Router();
const leaderboard = require('../controllers/leaderboard.controller.js');
const authMiddleware = require('../middlewares/auth.middleware');

// User Routes
router.get('/leaderboard/global', leaderboard.global);
router.get('/leaderboard/friends', authMiddleware, leaderboard.friends);

module.exports = router;