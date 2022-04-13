es// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const leaderboardService = require('../services/leaderboard.service.js');

module.exports = {

  // Creating User
  leaderboard: ('/leaderboard/global', controllerBoilerPlate(async (req) => {
    const data = leaderboardService.findGlobal();
    return controllerResponse(200, 'Successful', data);
  })),

  leaderboard: ('/leaderboard/friends', controllerBoilerPlate(async (req) => {
    const data = leaderboardService.find(req.user._id);
    return controllerResponse(200, 'Successful', data);
  })),

};