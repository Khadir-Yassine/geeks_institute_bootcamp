const axios = require("axios");
async function fetchData() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
    console.log("Fetched Posts (first 5):\n");
    res.data.forEach((post, i) => {
      console.log(`${i + 1}. ${post.title}`);
    });
  } catch (err) {
    console.log("Error fetching data:", err.message);
  }
}
module.exports = fetchData;