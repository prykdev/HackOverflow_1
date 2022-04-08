const axios = require('axios');

const getFollowers = async (username) => {
  try {
    const followers_URL = `https://api.github.com/users/${username}/followers`;
    const response = await axios.get(followers_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getFollowing = async (username) => {
  try {
    const following_URL = `https://api.github.com/users/${username}/following`;
    const response = await axios.get(following_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getRepositories = async (username) => {
  try {
    const repos_URL = `https://api.github.com/users/${username}/repos`
    const response = await axios.get(repos_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getOrganizations = async (username) => {
  try {
    const organizations_URL = `https://api.github.com/users/${username}/orgs`;
    const response = await axios.get(organizations_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getUser = async (username) => {
  try {
    const user_URL = `https://api.github.com/users/${username}`;
    const response = await axios.get(user_URL);
    if (response.status === 200) {
      const organizations = await getOrganizations(username);
      const data = {
        username: response.data.login,
        public_repos: response.data.public_repos,
        public_gists: response.data.public_gists,
        followers: response.data.followers,
        following: response.data.following,
        organizations: organizations.length,
        created_at: response.data.created_at,
      };
      console.log(data);
      return data;
    } else {
      return "Something went wrong!";
    }
  } catch (error) {
    console.log(error.response.status);
    if (error.response.status === 404) {
      return 404;
    } else {
      console.log(error);
      return "Something went wrong!";
    }
    // console.log(error);
  }
}
getUser('tgoyal63');

module.exports = {
  getUser,
  getOrganizations,
  getFollowers,
  getFollowing,
  getRepositories
}