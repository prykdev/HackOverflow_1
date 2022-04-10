const { getRequest } = require('./common.utils.js');

const getFollowers = async (username) => {
  try {
    const followers_URL = `https://api.github.com/users/${username}/followers`;
    const response = await getRequest(followers_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getFollowing = async (username) => {
  try {
    const following_URL = `https://api.github.com/users/${username}/following`;
    const response = await getRequest(following_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getRepositories = async (username) => {
  try {
    const repos_URL = `https://api.github.com/users/${username}/repos`
    const response = await getRequest(repos_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getOrganizations = async (username) => {
  try {
    const organizations_URL = `https://api.github.com/users/${username}/orgs`;
    const response = await getRequest(organizations_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getCommits = async (username) => {
  try {
    const commitsUrl = `https://api.github.com/search/commits?q=author:${username}`;
    const response = await getRequest(commitsUrl);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrganizations,
  getFollowers,
  getFollowing,
  getRepositories,
  getCommits
}