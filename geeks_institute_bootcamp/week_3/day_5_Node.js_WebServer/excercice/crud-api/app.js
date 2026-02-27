const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();

const PORT = 5000;
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log("Data successfully retrieved from JSONPlaceholder and sent to client.");
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});