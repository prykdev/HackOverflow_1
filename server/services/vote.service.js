// Importing File Dependencies
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const vote = require('../models/vote.model.js').model;
const ServiceError = require('../errors/service.error.js');

module.exports = {

    // Creating a vote request in database
    create: serviceBoilerPlate(async (data, body) => {
        const response = await vote.findOneAndUpdate(data, body, { upsert: true, new: true }).exec();
        return response;
    }),

    // Deleting a vote by its id from database
    delete: serviceBoilerPlate(async (data) => {
        await vote.findOneAndDelete(data).exec();
    }),

    search: serviceBoilerPlate(async (data) => {
        const response = await vote.find(data).exec();
        return response;
    }),
};