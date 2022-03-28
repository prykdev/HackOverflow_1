// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const ControllerError = require('../errors/controller.error.js');
const userService = require('../services/user.service.js');
const axios = require('axios');

module.exports = {

  github: (['/github', '/github/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if (username === "" || !username) {
      username = req.user.socials.github;
    }
    const data = {
      graph: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true`,
      stats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`,
      mul: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&layout=compact`,
      contributions: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6`,
      username
    };
    return controllerResponse(201, 'Successful', data);
  })),

  hackerrank: (['/hackerrank', '/hackerrank/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if (username === "" || !username) {
      username = req.user.socials.hackerrank;
    }
    username = "tgoyal63"
    const submissionsUrl = `https://www.hackerrank.com/rest/hackers/${username}/submission_histories`;
    const badgesUrl = `https://www.hackerrank.com/rest/hackers/${username}/badges`;
    const profileUrl = `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`;
    const submissions = (await requestFunc(submissionsUrl)).data;
    const sum = (submissions) => Object.values(submissions).reduce((a, b) => parseInt(a) + parseInt(b));
    totalSubmissions = sum(submissions);
    const badges = (await requestFunc(badgesUrl)).data.models;
    const profile = (await requestFunc(profileUrl)).data;

    return controllerResponse(201, 'Successful', {
      totalSubmissions,
      totalBadges: badges.length,
      badges,
      profile,
      username
    });
  })),
}

const requestFunc = ((url) => {
  return axios({
    method: 'get',
    url,
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0" }
  })
});