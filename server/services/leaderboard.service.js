const user = require('../models/user.model.js').model;
const friend = require('../models/friend.model.js').model;
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const ServiceError = require('../errors/service.error.js');

module.exports = {
    findGlobal: serviceBoilerPlate(async () => {
        const response = await user.find({}).sort({rating: -1}).exec();
        return response;
    }),

    find: serviceBoilerPlate(async (_id) => {
        const response = await user.aggregate({
            $lookup: {
                from: 'friends',
                localField: 'friends',
                foreignField: '_id',
                as: 'friends'
            }
        });
        return response;
    }),
}