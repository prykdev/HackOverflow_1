// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const ControllerError = require('../errors/controller.error.js');
const userService = require('../services/user.service.js');
const axios = require('axios');

module.exports = {

  github: (['/github','/github/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if(username === "" || !username) {
      username = req.user.socials.github;
    }
    const data = {
      graph: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true`,
      stats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`,
      mul: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&layout=compact`,
      contributions: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6`
    };
    return controllerResponse(201, 'Successful', data);
  })),

  hackerrank: (['/hackerrank','/hackerrank/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if(username === "" || !username) {
      username = req.user.socials.hackerrank;
    }
    const submissionsUrl = `https://www.hackerrank.com/rest/hackers/${username}/submission_histories`;
    const badgesUrl = `https://www.hackerrank.com/rest/hackers/${username}/badges`;
    const profileUrl = `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`;
    const submissions = await axios.get(submissionsUrl);
    const badges = await axios.get(badgesUrl);
    const profile = await axios.get(profileUrl);

    return controllerResponse(201, 'Successful', data);
  })),
}