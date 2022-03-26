// Importing File Dependencies
const CustomError = require('./custom.error');

class ControllerError extends CustomError {
  constructor(statusCode, message, data) {
    super(statusCode, message || 'Some controller error occured!', data);
  }
}

module.exports = ControllerError;