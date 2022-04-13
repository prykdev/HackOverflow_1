const router = require('express').Router();
const friend = require('../controllers/friend.controller.js');
const authMiddleware = require('../middlewares/auth.middleware');

// User Routes
router.get('/leaderboard/global', leaderboard.createFriend);
router.get('/acceptfriend/:username', authMiddleware, friend.editFriend);
router.delete('/delete/:username', authMiddleware, friend.deleteFriend);
// router.get('/friends', authMiddleware, friend.getFriendsLogs);

module.exports = router;