const axios = require("axios");
async function fetchPosts() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const posts = response.data;
    console.log("Post Titles:\n");
    for (let i = 0; i < posts.length; i++) {
      console.log((i + 1) + ". " + posts[i].title);
    }
  } catch (error) {
    console.log("Error fetching data:", error.message);
  }
}
module.exports = fetchPosts;