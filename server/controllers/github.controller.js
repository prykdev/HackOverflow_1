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
    const data = {
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      organizations: getOrganizations(username).length,
      created_at: response.data.created_at,
    };
    return data;
  } catch (error) {
    console.log(error);
  }
}