const ControllerError = require('../errors/controller.error.js');
const ServiceError = require('../errors/service.error.js');

const controllerResponse = (statusCode, message, data) => {
  console.log(`msg: ${message}, data: ${data}`);
  return {
    statusCode,
    message,
    data,
  };
};

const controllerBoilerPlate = (wrapped) => (req, res, next) => wrapped(req, res, next)
  .catch((err) => {
    if (err instanceof ControllerError || err instanceof ServiceError) {
      return controllerResponse(err.status, err.message, err.data);
    }
    return controllerResponse(500, err);
  }).then((response) => res.status(response.statusCode).send(response));

module.exports = {
  controllerResponse,
  controllerBoilerPlate,
};