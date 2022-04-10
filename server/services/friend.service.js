// Importing File Dependencies
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const friend = require('../models/friend.model.js').model;
const ServiceError = require('../errors/service.error.js');

module.exports = {

    // Creating a friend request in database
    create: serviceBoilerPlate(async (search, body) => {
        const response = await friend.findOneAndUpdate(search, body, { upsert: true, new: true }).exec();
        return response;
    }),

    // Updating a friend request in database
    update: serviceBoilerPlate(async (search, body) => {
        const data = await friend.findOneAndUpdate(search, body).exec();
        return data;
    }),

    // Deleting a friend by its id from database
    delete: serviceBoilerPlate(async (search) => {
        await friend.findOneAndDelete(search).exec();
    }),
};