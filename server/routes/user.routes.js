const router = require('express').Router();
const { validate, ValidationError } = require('express-validation');
const user = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { signUpSchema, loginSchema } = require('../models/user.model.js');
const scrapper = require('../controllers/scrapper.controller.js');

// User Routes
router.post('/signup', validate(signUpSchema), user.createUser);
router.post('/login', validate(loginSchema), user.login);
router.post('/check', user.check);
router.get('/profile', authMiddleware, user.profile);
router.get('/changepass', authMiddleware, user.changePassword);

// GitHub data
router.post(['/github', '/github/:username'], authMiddleware, scrapper.github);
router.post(['/hackerrank','/hackerrank/:username'], authMiddleware, scrapper.hackerrank);

// Validation Error Handling
router.use((err, req, res, next) => {
  const { name, details, statusCode } = err;
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ statusCode, name, message: details.body[0].message });
  }
  return res.status(500).json(err);
});

module.exports = router;