// Importing File Dependencies
const CustomError = require('./custom.error');

class ServiceError extends CustomError {
  constructor(statusCode, message, data) {
    super(statusCode, message || 'Some service error occured!', data);
  }
}

module.exports = ServiceError;