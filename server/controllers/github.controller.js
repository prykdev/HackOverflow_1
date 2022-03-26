const axios = require('axios');



const username = "tgoyal63";
const API_Url = "https://api.github.com/users/" + username;
const a = async () => {
  try {
  const data = await axios({
    method: "get",
    url: API_Url
    // headers: {
    //   Authorization: `Bearer ${config.githubToken}`,
    //   "Content-Type": "application/json",
    //   "Accept": "application/vnd.github.mercy-preview+json" // MUST ADD TO INCLUDE TOPICS
    // }
  });
  console.log(data);
} catch (err) {
  console.log(err);
}}
a();