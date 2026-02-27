const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const PORT = 5000;
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

app.get("/api/posts", async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.status(200).json(response.data);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.get("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/${id}`);
    res.status(200).json(response.data);
  } catch (err) {
    const status = err.response?.status || 500;
    console.error("Error fetching post:", err.message);

    if (status === 404) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(500).json({ message: "Failed to fetch post" });
  }
});

app.post("/api/posts", async (req, res) => {
  try {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
      return res.status(400).json({ message: "title, body, and userId are required" });
    }

    const response = await axios.post(BASE_URL, { title, body, userId });
    res.status(201).json(response.data);
  } catch (err) {
    console.error("Error creating post:", err.message);
    res.status(500).json({ message: "Failed to create post" });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, userId } = req.body;

    if (title === undefined && body === undefined && userId === undefined) {
      return res.status(400).json({ message: "Provide at least one of: title, body, userId" });
    }

    const response = await axios.put(`${BASE_URL}/${id}`, { title, body, userId });
    res.status(200).json(response.data);
  } catch (err) {
    const status = err.response?.status || 500;
    console.error("Error updating post:", err.message);

    if (status === 404) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(500).json({ message: "Failed to update post" });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${BASE_URL}/${id}`);

    res.status(200).json({ message: `Post ${id} deleted successfully` });
  } catch (err) {
    const status = err.response?.status || 500;
    console.error("Error deleting post:", err.message);

    if (status === 404) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(500).json({ message: "Failed to delete post" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});