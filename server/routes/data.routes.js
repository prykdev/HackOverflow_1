const router = require('express').Router();
const authMiddleware = require('../middlewares/auth.middleware');
const { validate, ValidationError } = require('express-validation');
const data = require('../controllers/data.controller.js');
const {checkSchema} = require('../models/user.validators.js');

// GitHub data
router.post('/check/:social', validate(checkSchema) ,data.socialCheck);
router.get(['/github', '/github/:username'], authMiddleware, data.github);
router.get(['/hackerrank', '/hackerrank/:username'], authMiddleware, data.hackerrank);
router.get(['/codechef', '/codechef/:username'], authMiddleware, data.codechef);

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