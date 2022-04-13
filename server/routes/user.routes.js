const router = require('express').Router();
const { validate, ValidationError } = require('express-validation');
const user = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const { signUpSchema, loginSchema, checkSchema, editSchema, changePasswordSchema } = require('../models/user.validators.js');

// User Routes
router.post('/signup', validate(signUpSchema), user.createUser);
router.post('/login', validate(loginSchema), user.login);
router.patch('/edit', authMiddleware, validate(editSchema), user.editUser);
router.post(['/check', '/search'], validate(checkSchema), user.check);
router.get('/profile', authMiddleware, user.profile);
router.patch('/password', authMiddleware, validate(changePasswordSchema), user.changePassword);
router.get('/friends/:type', authMiddleware, user.getFriends);

// Validation Error Handling
router.use((err, req, res, next) => {
  if (err) {
    const { name, details, statusCode } = err;
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json({ statusCode, name, message: details.body[0].message });
    }
    return res.status(500).json(err);
  }
  next();
});

module.exports = router;