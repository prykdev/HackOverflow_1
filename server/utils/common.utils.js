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
  },
  formatDate: (date) => {
    const d = new Date(date);
    const month = `${d.getMonth() + 1}`;
    const day = `${d.getDate()}`;
    const year = d.getFullYear();
    return [day, month, year].join('-');
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
    return error.response;
  }
}

const checkAllSocials = async (socials) => {
  const github = await getSocialData("github", socials.github);
  const hackerrank = await getSocialData("hackerrank", socials.hackerrank);
  const codechef = await getSocialData("codechef", socials.codechef);
  if (github.status === 404)
    return { status: 404, value: "Github" };
  if (hackerrank.status === 404)
    return { status: 404, value: "Hackerrank" };
  if (codechef.status === 404 || codechef.data.result === undefined)
    return { status: 404, value: "Codechef" };
  return {status: 200};
}

Object.freeze(CommonUtils);
module.exports = { getSocialData, checkAllSocials, ...CommonUtils };