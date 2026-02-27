const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const QUESTIONS = [
  {
    id: 1,
    text: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Mark Language",
      "High Text Machine Language"
    ],
    correctIndex: 0
  },
  {
    id: 2,
    text: "Which language runs in the browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    correctIndex: 3
  },
  {
    id: 3,
    text: "What does CSS stand for?",
    choices: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System"
    ],
    correctIndex: 1
  },
  {
    id: 4,
    text: "Which HTTP method is commonly used to send data to a server?",
    choices: ["GET", "POST", "READ", "FETCH"],
    correctIndex: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
}

app.get("/api/question", (req, res) => {
  if (currentQuestionIndex >= QUESTIONS.length) {
    return res.json({
      done: true,
      message: "Quiz finished! Get your result at /api/result"
    });
  }

  const q = QUESTIONS[currentQuestionIndex];

  res.json({
    done: false,
    questionNumber: currentQuestionIndex + 1,
    totalQuestions: QUESTIONS.length,
    id: q.id,
    text: q.text,
    choices: q.choices,
    score
  });
});

app.post("/api/answer", (req, res) => {
  const { selectedIndex } = req.body;

  if (currentQuestionIndex >= QUESTIONS.length) {
    return res.status(400).json({
      ok: false,
      message: "Quiz already finished."
    });
  }

  if (typeof selectedIndex !== "number") {
    return res.status(400).json({
      ok: false,
      message: "selectedIndex must be a number."
    });
  }

  const q = QUESTIONS[currentQuestionIndex];
  const isCorrect = selectedIndex === q.correctIndex;

  if (isCorrect) score++;
  currentQuestionIndex++;

  res.json({
    ok: true,
    isCorrect,
    correctIndex: q.correctIndex,
    score,
    remaining: QUESTIONS.length - currentQuestionIndex,
    done: currentQuestionIndex >= QUESTIONS.length
  });
});

app.get("/api/result", (req, res) => {
  res.json({
    score,
    total: QUESTIONS.length
  });
});

app.post("/api/restart", (req, res) => {
  resetQuiz();
  res.json({ ok: true, message: "Quiz restarted!" });
});

app.listen(PORT, () => {
  console.log(`Quiz server running at http://localhost:${PORT}`);
});