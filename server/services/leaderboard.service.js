const user = require('../models/user.model.js').model;
const friend = require('../models/friend.model.js').model;
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const ServiceError = require('../errors/service.error.js');

module.exports = {
  findGlobal: serviceBoilerPlate(async () => {
    const response = await user.find({}).sort({ rating: -1 }).exec();
    return response;
  }),

  find: serviceBoilerPlate(async (_id) => {
    const response = await user.aggregate([{
      $match: { _id },
    }, {
      $lookup: {
        from: 'friends',
        localField: 'friends',
        foreignField: '_id',
        as: 'friends'
      }
    }, {
      $lookup: {
        from: user.collection.name,
        localField: "friends.recipient",
        foreignField: "_id",
        as: "friends",
        let: { friends: "$friends" },
        pipeline: [{
        //   $match: { status: 3 }
        // }, {
          $project: { username: 1, _id: 0, name: 1, rating: 1 }
        }],
      }
    }, {
      $group: {
        "_id": "$_id",
        user: {
          $push: {
            username: "$username",
            name: "$name",
            rating: "$rating",
          }
        },
        friends: {
          $push: "$friends"
        }
      }
    }, {
      $unwind: "$friends"
    }, {
      $project: { friends: { $setUnion: ["$friends", "$user"] } }
    }, {
      $unwind: "$friends"
    }, {
      $replaceRoot: { newRoot: "$friends" }
    }, {
      $sort: { rating: -1 }
    }]).exec();
    return response;
  }),
}