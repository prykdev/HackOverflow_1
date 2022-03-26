const router = require('express').Router();
const { validate, ValidationError } = require('express-validation');
const user = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { signUpSchema } = require('../models/user.model.js');

// User Routes
router.post('/signup', validate(signUpSchema), user.createUser);
router.post('/login', user.login);
router.post('/check', user.check);
router.get('/profile', authMiddleware, user.profile);

// Validation Error Handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  const { name, details, statusCode } = err;
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json({ statusCode, name, message: details.body[0].message });
  }
  return res.status(500).json(err);
});

module.exports = router;