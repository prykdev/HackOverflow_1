const router = require('express').Router();
const friend = require('../controllers/friend.controller.js');
const authMiddleware = require('../middlewares/auth.middleware');

// User Routes
router.get('/addfriend/:username', authMiddleware, friend.createFriend);
router.get('/acceptfriend/:username', authMiddleware, friend.editFriend);
router.get('/rejectfriend/:username', authMiddleware, friend.deleteFriend);

module.exports = router;