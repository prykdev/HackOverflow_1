const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware');
const scrapper = require('../controllers/scrapper.controller.js');

// GitHub data
router.post('/check/:social', scrapper.socialCheck);
router.get(['/github', '/github/:username'], authMiddleware, scrapper.github);
router.get(['/hackerrank', '/hackerrank/:username'], authMiddleware, scrapper.hackerrank);
router.get(['/codechef', '/codechef/:username'], authMiddleware, scrapper.codechef);

module.exports = router;