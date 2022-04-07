// Importing Node Modules
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const {removeObjectProperties} = require('../utils/common.utils.js');
const ControllerError = require('../errors/controller.error.js');
const userService = require('../services/user.service.js');

module.exports = {

  // Creating User
  createUser: ('/signup', controllerBoilerPlate(async (req) => {

    // Hashing password for securely storing in database
    req.body.password = bcryptjs.hashSync(req.body.password, 10);

    // Creating User
    let data = await userService.create(req.body);

    // Creating JWT Token for user
    req.body.token = jwt.sign({ id: data._id }, secret, {
      expiresIn: '9999 years',
    });

    // Updating token in database
    data = await userService.updateById(data._id, { token: req.body.token });
    return controllerResponse(201, 'Successful', { token: data.token });
  })),

  // Viewing User Profile
  profile: ('/profile', controllerBoilerPlate(async (req) => {
    const data = await userService.searchByEntity('_id', req.id);
    const {email, username, socials, name} = data;
    let response = {email, username, name, socials};
    return controllerResponse(200, 'Successful', response);
  })),

  // Logging in User
  login: ('/login', controllerBoilerPlate(async (req) => {

    // Checking required fields provided or not
    if (!req.body) throw new ControllerError(404, 'username and password is required!');

    const data = await validateUser(req.body.username, req.body.password);

    return controllerResponse(200, 'Successful', { token: data.token });

  })),

  check: ('/check', controllerBoilerPlate(async (req) => {
    data = await checkExist(req.body.entity, req.body.value);
    if (data) {
      return controllerResponse(400, req.body.entity + ' already registered!');
    }
    return controllerResponse(200, req.body.entity + ' available!');
  })),


  // Changing User Password
  changePassword: ('/changepass', controllerBoilerPlate(async (req) => {
    // Checking required fields provided or not
    if (!req.body) throw new ControllerError(404, 'username, password and newPassword fields are required!');
    if (!req.body.newPassword) throw new ControllerError(404, 'newPassword field is required!');

    const user = await validateUser(req.body.username, req.body.password);

    const data = await userService.updateById(user._id, {
      "password": req.body.newPassword,
      "token": token
    });
  })),

  // resetPassword: ('/resetpass', controllerBoilerPlate(async (req) => {
  //   // Checking required fields provided or not
  //   if (!req.body) throw new ControllerError(404, 'username field is required!');
  //   if (!req.body.newPassword) throw new ControllerError(404, 'newPassword field is required!');

  //   const user = await validateUser(req.body.username, req.body.password);

  //   const data = await userService.updateById(user._id, {
  //     "password": req.body.newPassword,
  //     "token": token
  //   });
  // })),
};

const validateUser = async (username, password) => {

  // Checking for credentials
  if (!username || !password) {
    throw new ControllerError(404, 'Credentials Required');
  }

  // Checking if user exists in database
  const data = await checkExist('username', username);
  if (!data) {
    throw new ControllerError(404, 'User not found!');
  }

  // Checking if password is valid or not
  const passwordIsValid = bcryptjs.compareSync(password, data.password);
  if (!passwordIsValid) {
    throw new ControllerError(401, 'Invalid Password!');
  } else {
    return data;
  }
}

const checkExist = async (entity, entityValue) => {
  data = await userService.searchByEntity(entity, entityValue);
  return data;
}