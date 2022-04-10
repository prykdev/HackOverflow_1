const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware');
const data = require('../controllers/data.controller.js');

// GitHub data
router.post('/check/:social', data.socialCheck);
router.get(['/github', '/github/:username'], authMiddleware, data.github);
router.get(['/hackerrank', '/hackerrank/:username'], authMiddleware, data.hackerrank);
router.get(['/codechef', '/codechef/:username'], authMiddleware, data.codechef);

module.exports = router;