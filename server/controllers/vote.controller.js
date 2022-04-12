// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const { checkExist } = require('../utils/user.utils.js');
const friendService = require('../services/friend.service.js');
const userService = require('../services/user.service.js');
const ControllerError = require('../errors/controller.error.js');

module.exports = {

  // Upvoting a user
  upvote: (['/upvote/:username', '/downvote/:username'], controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const vote = await voteService.create({ voter: req.user._id, user: data._id }, { $set: { status: 1 } });
    const updateUserA = await userService.updateById(data._id, { $addToSet: { votes: vote._id }, $inc: { rating: 1 } });
    return controllerResponse(201, 'Successful');
  })),

  // Downvoting a user
  downvote: (['/downvote/:username', '/downvote/:username'], controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const vote = await voteService.create({ voter: req.user._id, user: data._id }, { $set: { status: -1 } });
    const user = await userService.updateById(data._id, { $addToSet: { votes: vote._id }, $inc: { rating: -1 } });
    return controllerResponse(201, 'Successful');
  })),

  remove: (['/remove/:username'], controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const vote = await voteService.delete({ voter: req.user._id, user: data._id });
    const user = await userService.updateById(data._id, { $pull: { votes: vote._id }, $inc: { rating: vote.status } });
    return controllerResponse(201, 'Successful');
  })),

  getVoteLogs: (['/voteLogs'], controllerBoilerPlate(async (req) => {
    const voteLogs = await voteService.find({ voter: req.user._id });
    return controllerResponse(200, voteLogs);
  })),

};