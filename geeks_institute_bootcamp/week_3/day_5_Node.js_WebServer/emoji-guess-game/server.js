const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "⚽", name: "Soccer" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🎧", name: "Headphones" },
  { emoji: "📚", name: "Books" },
  { emoji: "🌧️", name: "Rain" },
  { emoji: "🔥", name: "Fire" },
  { emoji: "❤️", name: "Heart" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🍎", name: "Apple" }
];

const players = new Map();

const leaderboard = [];

function getOrCreatePlayer(playerId) {
  if (!players.has(playerId)) {
    players.set(playerId, {
      score: 0,
      currentAnswer: null,
      currentEmoji: null
    });
  }
  return players.get(playerId);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(arr) {
  return arr
    .map((x) => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(({ x }) => x);
}

function generateQuestion() {
  const correct = emojis[getRandomInt(emojis.length)];

  const wrongPool = emojis.filter((e) => e.name !== correct.name);
  const wrongChoices = shuffle(wrongPool).slice(0, 3).map((e) => e.name);

  const options = shuffle([correct.name, ...wrongChoices]);

  return {
    emoji: correct.emoji,
    correctName: correct.name,
    options
  };
}

function updateLeaderboard(playerName, score) {
  const safeName = (playerName && playerName.trim()) ? playerName.trim() : "Anonymous";

  const existing = leaderboard.find((p) => p.name === safeName);

  if (!existing) {
    leaderboard.push({ name: safeName, bestScore: score });
  } else {
    existing.bestScore = Math.max(existing.bestScore, score);
  }

  leaderboard.sort((a, b) => b.bestScore - a.bestScore);
  if (leaderboard.length > 10) leaderboard.length = 10;
}


app.post("/api/start", (req, res) => {
  const { playerId } = req.body;
  if (!playerId) {
    return res.status(400).json({ ok: false, message: "playerId is required" });
  }

  players.set(playerId, { score: 0, currentAnswer: null, currentEmoji: null });

  res.json({ ok: true, message: "Game started / reset" });
});

app.get("/api/question", (req, res) => {
  const playerId = req.query.playerId;
  if (!playerId) {
    return res.status(400).json({ ok: false, message: "playerId is required" });
  }

  const player = getOrCreatePlayer(playerId);
  const q = generateQuestion();

  player.currentAnswer = q.correctName;
  player.currentEmoji = q.emoji;

  res.json({
    ok: true,
    emoji: q.emoji,
    options: q.options,
    score: player.score
  });
});

app.post("/api/guess", (req, res) => {
  const { playerId, guessName, playerName } = req.body;

  if (!playerId || !guessName) {
    return res.status(400).json({
      ok: false,
      message: "playerId and guessName are required"
    });
  }

  const player = getOrCreatePlayer(playerId);

  if (!player.currentAnswer) {
    return res.status(400).json({
      ok: false,
      message: "No active question. Call /api/question first."
    });
  }

  const correct = player.currentAnswer;
  const isCorrect = guessName === correct;

  if (isCorrect) {
    player.score += 1;
  }

  player.currentAnswer = null;

  updateLeaderboard(playerName, player.score);

  res.json({
    ok: true,
    isCorrect,
    correctName: correct,
    score: player.score
  });
});

app.get("/api/leaderboard", (req, res) => {
  res.json({ ok: true, top: leaderboard });
});

app.listen(PORT, () => {
  console.log(`Emoji game running at http://localhost:${PORT}`);
});