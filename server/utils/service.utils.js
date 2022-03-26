const ServiceError = require('../errors/service.error.js');

const serviceBoilerPlate = (wrapped) => (...params) => wrapped(...params).catch((err) => {
  if (err.name === 'MongoError' && err.code === 11000) {
    throw new ServiceError(409, err.message);
  } else if (err.name === 'CastError') {
    throw new ServiceError(403, `Invalid Creation ${err}`);
  } else throw err;
});

module.exports = {
  serviceBoilerPlate,
};