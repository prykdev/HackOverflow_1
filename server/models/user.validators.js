const { Joi } = require('express-validation');

const signUpSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    // phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    socials: Joi.object({
      github: Joi.string().required(),
      codeforces: Joi.string(),
      hackerearth: Joi.string(),
      atcoder: Joi.string(),
      leetcode: Joi.string(),
      codechef: Joi.string().required(),
      hackerrank: Joi.string().required()
    })
  }),
};

const loginSchema = {
  body: Joi.alternatives().try(
    Joi.object().keys({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }),
    Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
    // Joi.object().keys({
    //   phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    //   password: Joi.string().required(),
    // })
  ),
};

const checkSchema = {
  body: Joi.object({
    entity: Joi.string().valid('username', 'email').required(),
    value: Joi.string().required(),
  }).when(Joi.object({ entity: Joi.string().valid('email') }).unknown(), {
    then: Joi.object({
      value: Joi.string().email().required(),
    })
  }),
}

const editSchema = {
  body: Joi.object({
    socials: Joi.object({
      github: Joi.string().required(),
      codeforces: Joi.string(),
      hackerearth: Joi.string(),
      atcoder: Joi.string(),
      leetcode: Joi.string(),
      codechef: Joi.string().required(),
      hackerrank: Joi.string().required()
    })
  }),
};

const changePasswordSchema = {
  body: Joi.object({
    currentPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
  }),
};

module.exports = {
  signUpSchema,
  loginSchema,
  checkSchema,
  editSchema,
  changePasswordSchema
};