// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const userService = require('../services/user.service.js');
const { checkExist, signToken, hashPassword, validateUser, checkPassword } = require('../utils/user.utils.js');
const ControllerError = require('../errors/controller.error.js');
const { checkAllSocials } = require('../utils/common.utils.js');

module.exports = {
  upVote: ('/upvote/:userId', controllerBoilerPlate(async (req) => {
    const { userId } = req.params;
    const { user } = req;
    const { upvote } = user;
    const upvoteId = upvote.find(upvote => upvote.userId === userId);
    if (upvoteId) {
      throw new ControllerError(400, 'Already upvoted!');
    }
    const upvoteData = {
      userId,
      upvote: 1,
    };
    const upvoteUser = await userService.updateUser(user.userId, { upvote: [...upvote, upvoteData] });
    return controllerResponse(201, 'Successful', upvoteUser);
  })),
};