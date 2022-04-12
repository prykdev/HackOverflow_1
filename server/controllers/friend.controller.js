// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const { checkExist } = require('../utils/user.utils.js');
const friendService = require('../services/friend.service.js');
const userService = require('../services/user.service.js');
const ControllerError = require('../errors/controller.error.js');

module.exports = {

  // Sending Friend Request
  createFriend: ('/addfriend/:username', controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const check = await friendService.search({ requester: req.user._id, recipient: data._id });
    if (check[0]) {
      if (check[0].status === 3)
        throw new ControllerError(409, "Already friends!");
      else if (check[0].status === 1)
        throw new ControllerError(409, "Already sent friend request!");
      else if (check[0].status === 2)
        throw new ControllerError(409, "Already received friend request!");
    }

    const docA = await friendService.create({ requester: req.user._id, recipient: data._id }, { $set: { status: 1 } });
    const docB = await friendService.create({ recipient: req.user._id, requester: data._id }, { $set: { status: 2 } });

    const updateUserA = await userService.updateById(req.user._id, { $addToSet: { friends: docA._id } });
    const updateUserB = await userService.updateById(data._id, { $addToSet: { friends: docB._id } });
    return controllerResponse(201, 'Successful');
  })),

  // Accepting Friend Request
  editFriend: ('/acceptfriend/:username', controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const check = await friendService.search({ requester: req.user._id, recipient: data._id, status: 3 });
    if (JSON.stringify(check) !== "[]") throw new ControllerError(409, "Already friends!");

    const docA = await friendService.update({ requester: req.user._id, recipient: data._id }, { $set: { status: 3 } });
    const docB = await friendService.update({ recipient: req.user._id, requester: data._id }, { $set: { status: 3 } });
    return controllerResponse(204, 'Successful');
  })),

  // Rejecting Friend Request
  deleteFriend: ('/delete/:username', controllerBoilerPlate(async (req) => {
    const { username } = req.params;
    const data = await checkExist("username", username);
    if (!data)
      throw new ControllerError(404, "User not found!");

    const docA = await friendService.delete({ requester: req.user._id, recipient: data._id });
    const docB = await friendService.delete({ recipient: req.user._id, requester: data._id });

    if (!docA || !docB)
      throw new ControllerError(404, "User not found in the list!");

    const updateUserA = await userService.updateById(req.user._id, { $pull: { friends: docA._id } });
    const updateUserB = await userService.updateById(data._id, { $pull: { friends: docB._id } });
    return controllerResponse(201, 'Successful');
  })),

  getFriendsLogs: ('/friendsLogs', controllerBoilerPlate(async (req) => {
    const data = await friendService.search({ requester: req.user._id });
    return controllerResponse(200, data);
  }))

};