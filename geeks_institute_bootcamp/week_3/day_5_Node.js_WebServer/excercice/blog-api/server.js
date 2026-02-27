const express = require("express");

const app = express();
app.use(express.json());
let posts = [
  { id: 1, title: "Hello World", content: "My first blog post!" },
  { id: 2, title: "Second Post", content: "More content here." },
];

let nextId = 3;
app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "title is required and must be a non-empty string" });
  }
  if (typeof content !== "string" || content.trim() === "") {
    return res.status(400).json({ error: "content is required and must be a non-empty string" });
  }

  const newPost = {
    id: nextId++,
    title: title.trim(),
    content: content.trim(),
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const { title, content } = req.body;
  if (title === undefined && content === undefined) {
    return res.status(400).json({ error: "Provide at least one of: title, content" });
  }

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ error: "title must be a non-empty string if provided" });
    }
    posts[postIndex].title = title.trim();
  }

  if (content !== undefined) {
    if (typeof content !== "string" || content.trim() === "") {
      return res.status(400).json({ error: "content must be a non-empty string if provided" });
    }
    posts[postIndex].content = content.trim();
  }

  res.json(posts[postIndex]);
});
app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex((p) => p.id === id);

  if (postIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deleted = posts.splice(postIndex, 1)[0];
  res.json({ message: "Post deleted", deleted });
});
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blog API running at http://localhost:${PORT}`);
});