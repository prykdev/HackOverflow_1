// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const userService = require('../services/user.service.js');
const { checkExist, signToken, hashPassword, validateUser, checkPassword } = require('../utils/user.utils.js');
const ControllerError = require('../errors/controller.error.js');
const { checkAllSocials } = require('../utils/common.utils.js');

module.exports = {

  // Creating User
  createUser: ('/signup', controllerBoilerPlate(async (req) => {
    // Checking if user social handles are valid or not
    const check = await checkAllSocials(req.body.socials);
    if (check.status === 404)
      throw new ControllerError(404, `${check.value} username incorrect!`);
    // Hashing password for securely storing in database
    req.body.password = hashPassword(req.body.password);
    // Creating User
    let data = await userService.create(req.body);
    // Creating JWT Token for user
    token = signToken(data._id);
    // Updating token in database
    data = await userService.updateById(data._id, { token });
    return controllerResponse(201, 'Successful', { token });
  })),

  // Editing User
  editUser: ('/edit', controllerBoilerPlate(async (req) => {
    if (JSON.stringify(req.body.socials) === JSON.stringify(req.user.socials))
      throw new ControllerError(304, 'No changes made!');

    // Checking if user social handles are valid or not
    const check = await checkAllSocials(req.body.socials);
    if (check.status === 404)
      throw new ControllerError(404, `${check.value} username incorrect!`);

    // Updating data in database
    const data = await userService.updateById(req.user._id, req.body);
    return controllerResponse(204, 'Successful');
  })),

  // Viewing User Profile
  profile: ('/profile', controllerBoilerPlate(async (req) => {
    const data = await checkExist('_id', req.id);
    let response = (({ name, username, email, socials }) => ({ name, username, email, socials }))(data);
    response.upvotes = (await userService.getVotesData(req.user._id, 1)).length;
    response.downvotes = (await userService.getVotesData(req.user._id, -1)).length;
    return controllerResponse(200, 'Successful', response);
  })),

  // Logging in User
  login: ('/login', controllerBoilerPlate(async (req) => {
    const data = await validateUser(req.body);
    return controllerResponse(200, 'Successful', { token: data.token });
  })),

  // Checking if user exists
  check: ('/check', controllerBoilerPlate(async (req) => {
    const { username, email } = req.body;
    let data, entity;
    if (username) {
      entity = 'username';
      data = await checkExist('username', username);
    } else if (email) {
      entity = 'email';
      data = await checkExist('email', email);
      // } else if (phone) {
      //   entity = 'phone';
      //   data = await checkExist('phone', phone);
    }
    if (data)
      throw new ControllerError(409, entity + ' already registered!');
    return controllerResponse(200, entity + ' available!');
  })),

  search: ('/search', controllerBoilerPlate(async (req) => {
    const { username, email } = req.body;
    let data, entity;
    if (username) {
      entity = 'username';
      data = await checkExist('username', username);
    } else if (email) {
      entity = 'email';
      data = await checkExist('email', email);
      // } else if (phone) {
      //   entity = 'phone';
      //   data = await checkExist('phone', phone);
    }

    if (data) {
      if (data.friends[0]) {
        const status = data.friends[0].status;
        if (status === 3) data.status = 'friends';
        else if (status === 2) data.status = 'requested';
        else if (status === 1) data.status = 'pending';
        else data.status = 'add';
      }
      else data.status = 'add';
      data.upvotes = (await userService.getVotesData(data._id, 1)).length;
      data.downvotes = (await userService.getVotesData(data._id, -1)).length;

      if (req.user.username === data.username) {
        const response = (({ name, username, socials, upvotes, downvotes }) => ({ name, username, socials, upvotes, downvotes }))(data);
        return controllerResponse(200, "Successful", response);
      }

      const response = (({ name, username, status, socials, upvotes, downvotes }) => ({ name, username, status, socials, upvotes, downvotes }))(data);
      response.voteStatus = "neutral";
      data.votes.forEach(vote => {
        if (vote.voter.toString() === req.user._id.toString()) {
          if (vote.status === 1) {
            response.voteStatus = "upvoted";
          } else if (vote.status === -1) {
            response.voteStatus = "downvoted";
          }
        }
      })
      return controllerResponse(200, "Successful", response);
    }
    throw new ControllerError(404, "User not found!");
  })),

  // Changing User Password
  changePassword: ('/password', controllerBoilerPlate(async (req) => {
    // Checking if old password is correct
    const isPasswordValid = checkPassword(req.body.currentPassword, req.user.password);
    if (!isPasswordValid)
      throw new ControllerError(401, 'Invalid Password!');
    // Hashing password for securely storing in database
    password = hashPassword(req.body.newPassword);
    // Creating new JWT Token for user
    token = signToken(req.user._id);
    const data = await userService.updateById(req.user._id, { password, token });
    return controllerResponse(201, 'Successful', { token });
  })),

  getFriends: ('/friends/:type', controllerBoilerPlate(async (req) => {
    const { type } = req.params;
    let status;
    if (type === "pending") status = 1;
    else if (type === "requests") status = 2;
    else if (type === "all") status = 3
    const data = await userService.getFriendsData(req.user._id, status);
    data.friends = data.friends.map((friend) => friend.username);
    return controllerResponse(200, 'Successful', data);
  })),

  getVotes: ('/votes/:type', controllerBoilerPlate(async (req) => {
    const { type } = req.params;
    let status;
    if (type === "upvotes") status = 1;
    else if (type === "downvotes") status = -1;
    const data = await userService.getVotesData(req.user._id, status);
    return controllerResponse(200, 'Successful', data);
  })),

};