const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware');
const scrapper = require('../controllers/scrapper.controller.js');

// GitHub data
router.get(['/github', '/github/:username'], authMiddleware, scrapper.github);
router.get(['/hackerrank','/hackerrank/:username'], authMiddleware, scrapper.hackerrank);

module.exports = router;