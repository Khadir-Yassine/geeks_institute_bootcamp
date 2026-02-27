function getPlayerId() {
  let id = localStorage.getItem("emoji_player_id");
  if (!id) {
    id = "p_" + Math.random().toString(16).slice(2) + Date.now().toString(16);
    localStorage.setItem("emoji_player_id", id);
  }
  return id;
}

const playerId = getPlayerId();

const playerNameInput = document.getElementById("playerName");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");

const emojiBox = document.getElementById("emojiBox");
const guessForm = document.getElementById("guessForm");
const submitBtn = document.getElementById("submitBtn");

const feedback = document.getElementById("feedback");
const scoreBox = document.getElementById("scoreBox");

const leaderboardList = document.getElementById("leaderboardList");

let selectedGuess = null;

function setFeedback(text) {
  feedback.textContent = text;
}

function setScore(score) {
  scoreBox.textContent = `Score: ${score}`;
}

function buildOptions(options) {
  guessForm.innerHTML = "";
  selectedGuess = null;
  submitBtn.disabled = true;

  options.forEach((name) => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "guess";
    radio.value = name;

    radio.addEventListener("change", () => {
      selectedGuess = radio.value;
      submitBtn.disabled = false;
    });

    const span = document.createElement("span");
    span.textContent = name;

    label.appendChild(radio);
    label.appendChild(span);
    guessForm.appendChild(label);
  });
}

async function loadQuestion() {
  setFeedback("");

  const res = await fetch(`/api/question?playerId=${encodeURIComponent(playerId)}`);
  const data = await res.json();

  if (!data.ok) {
    setFeedback(data.message || "Error loading question.");
    return;
  }

  emojiBox.textContent = data.emoji;
  setScore(data.score);
  buildOptions(data.options);
}

async function submitGuess() {
  if (!selectedGuess) return;

  submitBtn.disabled = true;

  const playerName = playerNameInput.value.trim();

  const res = await fetch("/api/guess", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      playerId,
      guessName: selectedGuess,
      playerName
    })
  });

  const data = await res.json();

  if (!data.ok) {
    setFeedback(data.message || "Error submitting guess.");
    submitBtn.disabled = false;
    return;
  }

  if (data.isCorrect) {
    setFeedback("Correct!");
  } else {
    setFeedback(`Wrong! Correct answer: ${data.correctName}`);
  }

  setScore(data.score);
  await loadLeaderboard();
  setTimeout(loadQuestion, 700);
}

async function loadLeaderboard() {
  const res = await fetch("/api/leaderboard");
  const data = await res.json();

  if (!data.ok) return;

  leaderboardList.innerHTML = "";
  data.top.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = `${p.name} — ${p.bestScore}`;
    leaderboardList.appendChild(li);
  });
}

async function startGame() {
  setFeedback("");

  await fetch("/api/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ playerId })
  });

  await loadQuestion();
  await loadLeaderboard();
}

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", loadQuestion);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitGuess();
});

startGame();