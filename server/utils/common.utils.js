const axios = require('axios');
const CommonUtils = {
  generateResponse: (statusCode, message, data) => {
    console.log(`msg: ${message}, data: ${data}`);
    return {
      statusCode,
      message,
      data,
    };
  },
  customError: (status, msg) => ({
    status,
    msg,
    isCustom: true,
  }),
  removeDuplicateFromArray: (arr) => [...new Set(arr)],
  getRequest: async (url, headers = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0" }) => {
    const data = await axios({
      method: 'get',
      url,
      headers,
    });
    return data;
  },
  getCodechefToken: async () => {
    const data = await axios({
      method: "POST",
      url: "https://api.codechef.com/oauth/token",
      data: {
        client_id: process.env.CODECHEF_CLIENT_ID,
        client_secret: process.env.CODECHEF_CLIENT_SECRET,
        grant_type: "client_credentials",
      },
    });
    return data.data.result.data.access_token;
  }
};

const getSocialData = async (social, username) => {
  let url, headers;
  if (social === 'github')
    url = `https://api.github.com/users/${username}`;
  else if (social === 'hackerrank')
    url = `https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`;
  else if (social === 'codechef') {
    url = `https://api.codechef.com/users/${username}`;
    const accessToken = await CommonUtils.getCodechefToken();
    headers = {
      Authorization: `Bearer ${accessToken}`
    };
  }
  try {
    const data = await CommonUtils.getRequest(url, headers);
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      return error.response;
    }
    throw new ControllerError(500, 'Something went wrong!');
  }
}

const checkAllSocials = async (socials) => {
  const github = await getSocialData("github", socials.github);
  const hackerrank = await getSocialData("hackerrank", socials.hackerrrank);
  const codechef = await getSocialData("codechef", socials.codechef);
  if (github.status === 404)
    throw new ControllerError(404, 'Github username incorrect!');
  if (hackerrank.status === 404)
    throw new ControllerError(404, 'Hackerrank username incorrect!');
  if (codechef.status === 404 || codechef.data.result === undefined)
    throw new ControllerError(404, 'CodeChef username incorrect!');
}

Object.freeze(CommonUtils);
module.exports = { getSocialData, checkAllSocials, ...CommonUtils };