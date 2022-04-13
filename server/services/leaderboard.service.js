const user = require('../models/user.model.js');
const friend = require('../models/friend.model.js');
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const ServiceError = require('../errors/service.error.js');

module.exports = {
    findGlobal: serviceBoilerPlate(async () => {
        const response = await user.find({}).sort('rating').exec();
        return response;
    }),

    find: serviceBoilerPlate(async (_id) => {
        const response = await user.aggregate({

        });
        return response;
    }),
}