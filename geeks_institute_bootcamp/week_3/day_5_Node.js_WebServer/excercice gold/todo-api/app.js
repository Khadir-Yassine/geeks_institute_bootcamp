const express = require("express");

const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a CRUD API", completed: true },
];

let nextId = 3;

function parseId(param) {
  const id = Number(param);
  return Number.isInteger(id) && id > 0 ? id : null;
}

app.post("/api/todos", (req, res) => {
  const { title, completed } = req.body;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ message: "title is required and must be a non-empty string" });
  }

  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ message: "completed must be a boolean if provided" });
  }

  const newTodo = {
    id: nextId++,
    title: title.trim(),
    completed: completed ?? false,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => {
  res.status(200).json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) return res.status(400).json({ message: "Invalid todo id" });

  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.status(200).json(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) return res.status(400).json({ message: "Invalid todo id" });

  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" });

  const { title, completed } = req.body;

  if (title === undefined && completed === undefined) {
    return res
      .status(400)
      .json({ message: "Provide at least one field to update: title or completed" });
  }

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ message: "title must be a non-empty string if provided" });
    }
    todos[todoIndex].title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "completed must be a boolean if provided" });
    }
    todos[todoIndex].completed = completed;
  }

  res.status(200).json(todos[todoIndex]);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseId(req.params.id);
  if (!id) return res.status(400).json({ message: "Invalid todo id" });

  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" });

  const deleted = todos.splice(todoIndex, 1)[0];
  res.status(200).json({ message: "Todo deleted", deleted });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});