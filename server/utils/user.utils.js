// Importing Node Modules
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

// Importing File Dependencies
const ControllerError = require('../errors/controller.error.js');
const userService = require('../services/user.service.js');

const validateUser = async (data) => {
  let res;
  // Checking if user exists in database
  if (data.hasOwnProperty('username'))
    res = await checkExist('username', data.username);
  else if (data.hasOwnProperty('email'))
    res = await checkExist('email', data.email);
  // else if (data.hasOwnProperty('phone'))
  //   res = await checkExist('phone', data.phone);
  if (!res) {
    throw new ControllerError(404, 'User not found!');
  }

  // Checking if password is valid or not
  const passwordIsValid = checkPassword(data.password, res.password);
  if (!passwordIsValid) {
    throw new ControllerError(401, 'Invalid Password!');
  } else {
    return res;
  }
};

const checkExist = async (entity, entityValue) => {
  data = await userService.searchByEntity(entity, entityValue);
  return data;
};

const signToken = (id) => {
  const token = jwt.sign({ id }, secret, {
    expiresIn: '9999 years',
  });
  return token;
};

const hashPassword = (password) => {
  const hash = bcryptjs.hashSync(password, 10);
  return hash;
};

const checkPassword = (password, hash) => {
  const passwordIsValid = bcryptjs.compareSync(password, hash);
  return passwordIsValid;
};


module.exports = {
  validateUser,
  checkExist,
  signToken,
  hashPassword,
  checkPassword
};