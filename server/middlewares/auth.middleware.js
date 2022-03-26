// Importing Node Modules
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

// Importing File Dependencies
const ControllerError = require('../errors/controller.error.js');
const userService = require('../services/user.service.js');

module.exports = async (req, res, next) => {
  try {
    // Checking if authorization header is provided
    if (!(req.headers && req.headers.authorization)) throw new ControllerError(403, 'Access denied! No token provided.');
    const token = req.headers.authorization.split(' ')[1];

    // Checking if token is provided
    if (!token) throw new ControllerError(403, 'Access denied! No token provided.');
    const decodedJWT = await jwt.verify(token, secret);

    // Checking if the user is valid
    if (!decodedJWT) throw new ControllerError(401, 'Unauthorized!');
    const data = await userService.searchByEntity('_id', decodedJWT.id);
    if (data && token === data.token) {
      req.user = data.role;
      req.id = data._id;
      next();
    } else {
      throw new ControllerError(401, 'Invalid User token!');
    }
  } catch (err) {
    res.status(err.status).send({ status: err.status, message: err.message });
  }
};