// Importing File Dependencies
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const user = require('../models/user.model.js').model;
const friend = require('../models/friend.model.js').model;
const ServiceError = require('../errors/service.error.js');

module.exports = {

  // Creating a user in database
  create: serviceBoilerPlate(async (data) => {
    const response = await user.create(data);
    return response;
  }),

  // Searching for user in database
  searchByEntity: serviceBoilerPlate(async (entity, entityValue) => {
    let data;
    if (entity === '_id') {
      data = await user.findOne({ _id: entityValue }).exec();
    } else if (entity === 'username') {
      data = await user.findOne({ username: entityValue }).exec();
      // } else if (entity === 'phone') {
      //     data = await user.findOne({ phone: entityValue }).exec();
    } else if (entity === 'email') {
      data = await user.findOne({ email: entityValue }).exec();
    } else {
      throw new ServiceError(403, 'Invalid Search');
    }
    return data;
  }),

  // Updating a user by its id in database
  updateById: serviceBoilerPlate(async (_id, body) => {
    const data = await user.findOneAndUpdate({ _id }, body, { new: true }).exec();
    return data;
  }),

  // Deleting a user by its id from database
  deleteById: serviceBoilerPlate(async (_id) => {
    await user.findOneAndDelete({ _id }).exec();
  }),

  getFriendsData: serviceBoilerPlate(async (_id, status) => {
    const data = await user.aggregate([{
      $lookup: {
        from: friend.collection.name,
        localField: "friends",
        foreignField: "_id",
        as: "friends",
        let: { friends: "$friends" },
        pipeline: [{
          $match: { status, requester: _id }
        }, {
          $project: { recipient: 1, _id: 0 }
        }],
      }
    }, {
      $match: { _id }
    }, {
      $project: { username: 1, friends: 1, _id: 0 }
    }, {
      $lookup: {
        from: user.collection.name,
        localField: "friends.recipient",
        foreignField: "_id",
        as: "friends",
        let: { friends: "$friends" },
        pipeline: [ {
          $project: { username: 1, _id: 0 }
        }],
      }
    }]).exec();
    return data;
  })
};