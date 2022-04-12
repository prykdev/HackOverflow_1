// Importing File Dependencies
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const friend = require('../models/friend.model.js').model;
const ServiceError = require('../errors/service.error.js');

module.exports = {

    // Creating a friend request in database
    create: serviceBoilerPlate(async (data, body) => {
        const response = await friend.findOneAndUpdate(data, body, { upsert: true, new: true }).exec();
        return response;
    }),

    // Updating a friend request in database
    update: serviceBoilerPlate(async (data, body) => {
        const response = await friend.findOneAndUpdate(data, body).exec();
        return response;
    }),

    // Deleting a friend by its id from database
    delete: serviceBoilerPlate(async (data) => {
        const response = await friend.findOneAndDelete(data).exec();
        return response;
    }),

    search: serviceBoilerPlate(async (data) => {
        const response = await friend.find(data).exec();
        return response;
    })
};