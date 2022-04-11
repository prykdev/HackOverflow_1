// Importing File Dependencies
const { controllerBoilerPlate, controllerResponse } = require('../utils/controller.utils.js');
const ControllerError = require('../errors/controller.error.js');
const { getRequest, getSocialData, formatDate } = require('../utils/common.utils.js');
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
    const baseData = {
      graph: `https://activity-graph.herokuapp.com/graph?username=${username}&bg_color=17171F&color=FF6666&line=FFFFFF&point=FF6666&area=true&hide_border=true`,
      stats: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=17171F&title_color=FF6666&text_color=FFFFFF&icon_color=FF6666`,
      mul: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&bg_color=17171F&title_color=FF6666&text_color=FFFFFF&hide_border=true&card_width=400`,
      contributions: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&sideNums=FFFFFF&background=17171F&currStreakNum=FFFFFF&fire=FF6666&sideLabels=FF6666&dates=FFFFFF&ring=FF6666&stroke=FF6666&currStreakLabel=FF6666`,
      githubUsername: username,
    }
    const data = await getSocialData("github", username);
    if (data.status === 404)
      throw new ControllerError(404, 'User not found!');
    else if (data.status === 403 && data.statusText === 'rate limit exceeded')
      return controllerResponse(200, 'Github API Rate Limit exceeded!',baseData);
    const github = data.data;
    const organizations = await githubUtils.getOrganizations(username);
    const githubData = {
      public_repos: github.public_repos,
      public_gists: github.public_gists,
      followers: github.followers,
      following: github.following,
      organizations: organizations.length,
      github_created_at: formatDate(github.created_at),
      ...baseData
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
    if (JSON.stringify(submissions) === "{}") totalSubmissions = 0;
    else {
      const sum = (submissions) => Object.values(submissions).reduce((a, b) => parseInt(a) + parseInt(b));
      totalSubmissions = sum(submissions);
    }
    const badges = (await getRequest(badgesUrl)).data.models;
    const profile = data.data.model;
    return controllerResponse(201, 'Successful', {
      hackerrankUsername: profile.username,
      hackerrank_created_at: formatDate(profile.created_at),
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
    const codechefData = data.data.result.data.content;
    codechefData.ratings = codechefData.ratings.allContest;
    // Calculating div on the basis of ratings
    if (codechefData.ratings < 1400) codechefData.div = 4
    else if (codechefData.ratings >= 1400 && codechefData.ratings < 1600) codechefData.div = 3
    else if (codechefData.ratings >= 1600 && codechefData.ratings < 2000) codechefData.div = 2
    else if (codechefData.ratings >= 2000) codechefData.div = 1
    return controllerResponse(201, 'Successful', {
      codechefUsername: codechefData.username,
      rankings: codechefData.rankings.allContestRanking,
      ratings: codechefData.ratings,
      language: codechefData.language || "None",
      band: codechefData.band,
      submissionStats: codechefData.submissionStats,
      div: codechefData.div
    });
  })),
}