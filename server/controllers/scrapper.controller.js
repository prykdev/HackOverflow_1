// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const ControllerError = require('../errors/controller.error.js');
const { getCodechefToken, getRequest } = require('../utils/common.utils.js');
const githubUtils = require('../utils/github.utils.js');
const axios = require('axios');

module.exports = {

  socialCheck: ('/check/:social', controllerBoilerPlate(async (req) => {
    const { username } = req.body;
    const { social } = req.params;
    const data = await getSocialData(social, username);
    if (data.status === 200) {
      return controllerResponse(201, 'Successful', { isExist: true });
    }
    throw new ControllerError(404, 'User not found!');
  })),

  github: (['/github', '/github/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if (username === "" || !username) {
      username = req.user.socials.github;
    }
    const { data } = await getSocialData("github", username);
    const organizations = await githubUtils.getOrganizations(username);
    const githubData = {
      graph: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true`,
      stats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`,
      mul: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&layout=compact`,
      contributions: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6`,
      username: data.login,
      public_repos: data.public_repos,
      public_gists: data.public_gists,
      followers: data.followers,
      following: data.following,
      organizations: organizations.length,
      created_at: data.created_at,
    };
    return controllerResponse(201, 'Successful', githubData);
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
    const submissions = (await getRequest(submissionsUrl)).data;
    const sum = (submissions) => Object.values(submissions).reduce((a, b) => parseInt(a) + parseInt(b));
    totalSubmissions = sum(submissions);
    const badges = (await getRequest(badgesUrl)).data.models;
    const profile = (await getRequest(profileUrl)).data;

    return controllerResponse(201, 'Successful', {
      totalSubmissions,
      totalBadges: badges.length,
      badges,
      profile,
      username
    });
  })),
}

const getSocialData = async (social, username) => {
  let url;
  let headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0" };
  if (social === 'github')
    url = `https://api.github.com/users/${username}`;
  else if (social === 'hackerrank')
    url = `https://www.hackerrank.com/rest/hackers/${username}`;
  else if (social === 'codechef') {
    url = `https://api.codechef.com/users/${username}`;
    const accessToken = await getCodechefToken();
    headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }
  try {
    const data = await getRequest(url, headers);
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    if (error.response.status === 404) {
      return error.response;
    }
    throw new ControllerError(500, 'Something went wrong!');
  }
}