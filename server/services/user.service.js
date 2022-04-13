// Importing File Dependencies
const { serviceBoilerPlate } = require('../utils/service.utils.js');
const user = require('../models/user.model.js').model;
const friend = require('../models/friend.model.js').model;
const vote = require('../models/vote.model.js').model;
const ServiceError = require('../errors/service.error.js');
const { ObjectId } = require('mongoose').Types;

module.exports = {

  // Creating a user in database
  create: serviceBoilerPlate(async (data) => {
    const response = await user.create(data);
    return response;
  }),

  // Searching for user in database
  searchByEntity: serviceBoilerPlate(async (entity, entityValue) => {
    const query = {};
    if (entity === '_id') {
      query._id = ObjectId(entityValue);
    } else if (entity === 'username') {
      query.username = entityValue;
      // } else if (entity === 'phone') {
      //     query.phone = entityValue;
    } else if (entity === 'email') {
      query.email = entityValu;
    } else {
      throw new ServiceError(403, 'Invalid Search');
    }
    const data = await user.aggregate([{
      $lookup: {
        from: friend.collection.name,
        localField: "friends",
        foreignField: "_id",
        as: "friends",
        let: { friends: "$friends" },
        pipeline: [{ $project: { status: 1, _id: 0 } }]
      },
    //   $lookup: {
    //     from: vote.collection.name,
    //     localField: "votes",
    //     foreignField: "_id",
    //     as: "votes",
    //     let: { votes: "$votes" },
    //     pipeline: [{
    //       $project: { status: 1, _id: 0, voter: 1 },
    //     }]
    //   },
    // }, {
    //   $lookup: {
    //     from: user.collection.name,
    //     localField: 'votes.voter',
    //     foreignField: '_id',
    //     as: 'voter',
    //     let: { voter: "$voter" },
    //     pipeline: [{
    //       $project: { username: 1 }
    //     }]
    //   }
    }, {
      $match: query
    }]).exec();
    return data[0];
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
        pipeline: [{
          $project: { username: 1, _id: 0 }
        }],
      }
    }]).exec();
    return data[0];
  }),

  getVotesData: serviceBoilerPlate(async (_id, status) => {
    const data = await user.aggregate([{
      $lookup: {
        from: vote.collection.name,
        localField: "votes",
        foreignField: "_id",
        as: "votes",
        let: { votes: "$votes" },
        pipeline: [{
          $match: { status, user: _id }
        }, {
          $project: { voter: 1, _id: 0 }
        }],
      }
    }, {
      $match: { _id }
    }, {
      $project: { username: 1, votes: 1, _id: 0 }
    }, {
      $lookup: {
        from: user.collection.name,
        localField: "votes.voter",
        foreignField: "_id",
        as: "votes",
        let: { votes: "$votes" },
        pipeline: [{
          $project: { username: 1, _id: 0 }
        }],
      }
    }]).exec();
    return data[0].votes;
  })
};