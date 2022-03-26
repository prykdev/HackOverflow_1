const { model, Schema } = require('mongoose');
const { Joi } = require('express-validation');

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  // phone: {
  //   type: Number,
  //   unique: true,
  //   required: true,
  // },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: {
    type: [String],
    default: []
  },
  socials: {
    github: {
      type: String,
      default: ""
    },
    codeforces: {
      type: String,
      default: ""
    },
    hackerearth: {
      type: String,
      default: ""
    },
    atcoder: {
      type: String,
      default: ""
    }
  },
  token: {
    type: String,
    default: ""
  }
});

model('user', user);

const signUpSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    username: Joi.string().required(),
    // phone: Joi.number().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    socials: Joi.object({
      github: Joi.string(),
      codeforces: Joi.string(),
      hackerearth: Joi.string(),
      atcoder: Joi.string()
    })
  }),
};

module.exports = {
  model: model('user'),
  schema: user,
  signUpSchema,
};
