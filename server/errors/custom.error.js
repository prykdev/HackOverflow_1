class CustomError extends Error {
  constructor(statusCode, message, data) {
    super(message || 'Some error occured!');
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = statusCode;
    this.data = data;
  }

  statusCode() {
    return this.status;
  }
}

module.exports = CustomError;