// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const ControllerError = require('../errors/controller.error.js');
const { getRequest, getSocialData } = require('../utils/common.utils.js');
const githubUtils = require('../utils/github.utils.js');

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
    const data = await getSocialData("github", username);
    if (data.status === 404)
      throw new ControllerError(404, 'User not found!');
    const github = data.data;
    const organizations = await githubUtils.getOrganizations(username);
    const githubData = {
      graph: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=1a1b27&color=6899eb&line=4c8ed9&point=255e5e&area=true&hide_border=true`,
      stats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight`,
      mul: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=tokyonight&layout=compact`,
      contributions: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&ring=DD2727&fire=DD2727&currStreakNum=6695E6`,
      username: github.login,
      public_repos: github.public_repos,
      public_gists: github.public_gists,
      followers: github.followers,
      following: github.following,
      organizations: organizations.length,
      created_at: github.created_at,
    };
    return controllerResponse(201, 'Successful', githubData);
  })),

  hackerrank: (['/hackerrank', '/hackerrank/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if (username === "" || !username) {
      username = req.user.socials.hackerrank;
    }
    const data = (await getSocialData("hackerrank", username));
    if (data.status === 404)
      throw new ControllerError(404, 'User not found!');
    const submissionsUrl = `https://www.hackerrank.com/rest/hackers/${username}/submission_histories`;
    const badgesUrl = `https://www.hackerrank.com/rest/hackers/${username}/badges`;
    const submissions = (await getRequest(submissionsUrl)).data;
    const sum = (submissions) => Object.values(submissions).reduce((a, b) => parseInt(a) + parseInt(b));
    totalSubmissions = sum(submissions);
    const badges = (await getRequest(badgesUrl)).data.models;
    const profile = data.data.model;
    return controllerResponse(201, 'Successful', {
      username: profile.username,
      created_at: profile.created_at,
      level: profile.level,
      followers_count: profile.followers_count,
      totalSubmissions,
      totalBadges: badges.length,
      badgeData: badges.map((badge) => { return { badge_name: badge.badge_name, stars: badge.stars } }),
    });
  })),

  codechef: (['/codechef', '/codechef/:username'], controllerBoilerPlate(async (req) => {
    let username = req.params.username;
    if (username === "" || !username) {
      username = req.user.socials.codechef;
    }
    const data = (await getSocialData("codechef", username));
    if (data.status === 404 || data.data.result === undefined)
      throw new ControllerError(404, 'User not found!');
    const codechefData = (({ username, rankings, ratings, submissionStats, language, band }) => ({ username, rankings, ratings, submissionStats, language, band }))(data.data.result.data.content);
    codechefData.rankings = codechefData.rankings.allContestRanking;
    codechefData.ratings = codechefData.ratings.allContest;
    // Calculating div on the basis of ratings
    if(codechefData.ratings < 1400) codechefData.div = 4
    else if(codechefData.ratings < 1600) codechefData.div = 4
    else if(codechefData.ratings < 2000) codechefData.div = 4
    else codechefData.div = 1
    return controllerResponse(201, 'Successful', codechefData);
  })),
}