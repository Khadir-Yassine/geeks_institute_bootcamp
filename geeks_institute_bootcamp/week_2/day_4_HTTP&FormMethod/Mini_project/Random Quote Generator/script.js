const quotes = [
  { id: 0, author: "Charles Lindbergh", quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.", likes: 0 },
  { id: 1, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
  { id: 2, author: "Maya Angelou", quote: "If you don't like something, change it. If you can't change it, change your attitude.", likes: 0 },
  { id: 3, author: "Marcus Aurelius", quote: "You have power over your mind — not outside events. Realize this, and you will find strength.", likes: 0 },
  { id: 4, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 },
];

const generateBtn = document.getElementById("generateBtn");
const quoteCard = document.getElementById("quoteCard");
const quoteTextEl = document.getElementById("quoteText");
const quoteAuthorEl = document.getElementById("quoteAuthor");
const infoEl = document.getElementById("info");

const countSpacesBtn = document.getElementById("countSpacesBtn");
const countNoSpacesBtn = document.getElementById("countNoSpacesBtn");
const countWordsBtn = document.getElementById("countWordsBtn");
const likeBtn = document.getElementById("likeBtn");

const addForm = document.getElementById("addForm");
const newQuoteEl = document.getElementById("newQuote");
const newAuthorEl = document.getElementById("newAuthor");
const addMsgEl = document.getElementById("addMsg");

const filterForm = document.getElementById("filterForm");
const filterAuthorEl = document.getElementById("filterAuthor");
const filterMsgEl = document.getElementById("filterMsg");
const clearFilterBtn = document.getElementById("clearFilterBtn");

const nav = document.getElementById("nav");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


let lastRandomId = null;        
let currentQuote = null;        

let filteredQuotes = [];
let filteredIndex = 0;
let isFiltering = false;

function renderQuote(q) {
  currentQuote = q;
  quoteCard.classList.remove("hidden");
  quoteTextEl.textContent = q.quote;
  quoteAuthorEl.textContent = q.author;

  infoEl.textContent = `Likes: ${q.likes}`;
}

function randomQuoteNoRepeat() {
  if (quotes.length === 0) return null;
  if (quotes.length === 1) return quotes[0];

  let q;
  do {
    const idx = Math.floor(Math.random() * quotes.length);
    q = quotes[idx];
  } while (q.id === lastRandomId);

  lastRandomId = q.id;
  return q;
}

function charsWithSpaces(text) {
  return text.length;
}

function charsWithoutSpaces(text) {
  return text.replace(/\s/g, "").length;
}

function wordCount(text) {
  const trimmed = text.trim();
  if (trimmed === "") return 0;
  return trimmed.split(/\s+/).length;
}

function setFilteringMode(on) {
  isFiltering = on;
  if (on) nav.classList.remove("hidden");
  else nav.classList.add("hidden");
}

generateBtn.addEventListener("click", () => {
  setFilteringMode(false);
  filterMsgEl.textContent = "";

  const q = randomQuoteNoRepeat();
  if (!q) return;

  renderQuote(q);
});

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const quoteValue = newQuoteEl.value.trim();
  const authorValue = newAuthorEl.value.trim();

  if (!quoteValue || !authorValue) {
    addMsgEl.textContent = "Please fill in both Quote and Author.";
    return;
  }

  const newId = quotes.length === 0 ? 0 : Math.max(...quotes.map(q => q.id)) + 1;

  const newObj = {
    id: newId,
    author: authorValue,
    quote: quoteValue,
    likes: 0, 
  };

  quotes.push(newObj);

  addMsgEl.textContent = `Added! Quote id = ${newId}`;
  newQuoteEl.value = "";
  newAuthorEl.value = "";
});

countSpacesBtn.addEventListener("click", () => {
  if (!currentQuote) return;
  const n = charsWithSpaces(currentQuote.quote);
  infoEl.textContent = `Characters (with spaces): ${n} | Likes: ${currentQuote.likes}`;
});

countNoSpacesBtn.addEventListener("click", () => {
  if (!currentQuote) return;
  const n = charsWithoutSpaces(currentQuote.quote);
  infoEl.textContent = `Characters (no spaces): ${n} | Likes: ${currentQuote.likes}`;
});

countWordsBtn.addEventListener("click", () => {
  if (!currentQuote) return;
  const n = wordCount(currentQuote.quote);
  infoEl.textContent = `Words: ${n} | Likes: ${currentQuote.likes}`;
});

likeBtn.addEventListener("click", () => {
  if (!currentQuote) return;
  currentQuote.likes += 1;
  infoEl.textContent = `Likes: ${currentQuote.likes}`;
});

filterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const authorQuery = filterAuthorEl.value.trim().toLowerCase();
  if (!authorQuery) return;

  filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorQuery));

  if (filteredQuotes.length === 0) {
    filterMsgEl.textContent = "No quotes found for this author.";
    setFilteringMode(false);
    return;
  }

  setFilteringMode(true);
  filteredIndex = 0;
  renderQuote(filteredQuotes[filteredIndex]);
  filterMsgEl.textContent = `Found ${filteredQuotes.length} quote(s). Use Previous/Next.`;
});

clearFilterBtn.addEventListener("click", () => {
  isFiltering = false;
  filteredQuotes = [];
  filteredIndex = 0;
  filterAuthorEl.value = "";
  filterMsgEl.textContent = "Filter cleared.";
  setFilteringMode(false);
});

prevBtn.addEventListener("click", () => {
  if (!isFiltering || filteredQuotes.length === 0) return;
  filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  renderQuote(filteredQuotes[filteredIndex]);
});

nextBtn.addEventListener("click", () => {
  if (!isFiltering || filteredQuotes.length === 0) return;
  filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
  renderQuote(filteredQuotes[filteredIndex]);
});
