const questionText = document.getElementById("questionText");
const choicesForm = document.getElementById("choicesForm");
const submitBtn = document.getElementById("submitBtn");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");

const quizArea = document.getElementById("quizArea");
const resultArea = document.getElementById("resultArea");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

let selectedIndex = null;
let lastQuestionData = null;

async function fetchQuestion() {
  feedback.textContent = "";
  nextBtn.style.display = "none";
  submitBtn.disabled = true;
  selectedIndex = null;

  const res = await fetch("/api/question");
  const data = await res.json();

  if (data.done) {
    return showResult();
  }

  lastQuestionData = data;

  progressText.textContent = `Question ${data.questionNumber}/${data.totalQuestions}`;
  scoreText.textContent = `Score: ${data.score}`;
  questionText.textContent = data.text;

  choicesForm.innerHTML = "";
  data.choices.forEach((choice, idx) => {
    const label = document.createElement("label");
    label.className = "choice";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "choice";
    radio.value = idx;

    radio.addEventListener("change", () => {
      selectedIndex = Number(radio.value);
      submitBtn.disabled = false;
    });

    const span = document.createElement("span");
    span.textContent = choice;

    label.appendChild(radio);
    label.appendChild(span);
    choicesForm.appendChild(label);
  });
}

async function submitAnswer() {
  if (selectedIndex === null) return;

  submitBtn.disabled = true;

  const res = await fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ selectedIndex })
  });

  const data = await res.json();

  if (!data.ok) {
    feedback.textContent = data.message || "Something went wrong.";
    submitBtn.disabled = false;
    return;
  }
  if (data.isCorrect) {
    feedback.textContent = "Correct!";
  } else {
    const correctText = lastQuestionData.choices[data.correctIndex];
    feedback.textContent = `Wrong. Correct answer: ${correctText}`;
  }

  scoreText.textContent = `Score: ${data.score}`;

  if (data.done) {
    nextBtn.style.display = "none";
    setTimeout(showResult, 600);
  } else {
    nextBtn.style.display = "inline-block";
  }
}

async function showResult() {
  const res = await fetch("/api/result");
  const data = await res.json();

  quizArea.style.display = "none";
  resultArea.style.display = "block";

  finalScore.textContent = `Your final score is ${data.score} out of ${data.total}.`;
}

async function restartQuiz() {
  await fetch("/api/restart", { method: "POST" });

  resultArea.style.display = "none";
  quizArea.style.display = "block";

  await fetchQuestion();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  submitAnswer();
});

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchQuestion();
});

restartBtn.addEventListener("click", restartQuiz);
fetchQuestion();