const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const btnRandom = document.getElementById("btn-random");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

const loaderEl = document.getElementById("loader");
const errorEl = document.getElementById("error");
const imgEl = document.getElementById("poke-img");

const nameEl = document.getElementById("poke-name");
const idEl = document.getElementById("poke-id");
const heightEl = document.getElementById("poke-height");
const weightEl = document.getElementById("poke-weight");
const typeEl = document.getElementById("poke-type");

let currentPokemonId = 25; 

function showLoading() {
  loaderEl.classList.remove("hidden");
  errorEl.classList.add("hidden");
  imgEl.classList.add("hidden");
}

function hideLoading() {
  loaderEl.classList.add("hidden");
}

function showError() {
  errorEl.classList.remove("hidden");
  imgEl.classList.add("hidden");
}

function setInfoToDashes() {
  nameEl.textContent = "—";
  idEl.textContent = "Pokemon n° —";
  heightEl.textContent = "Height: —";
  weightEl.textContent = "Weight: —";
  typeEl.textContent = "Type: —";
}

function capFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function pickBestSprite(pokemonData) {
  return (
    pokemonData?.sprites?.other?.["official-artwork"]?.front_default ||
    pokemonData?.sprites?.front_default ||
    ""
  );
}

async function fetchAndDisplayPokemon(id) {
  try {
    showLoading();
    setInfoToDashes();

    const res = await fetch(`${BASE_URL}${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    currentPokemonId = data.id;

    const spriteUrl = pickBestSprite(data);
    if (spriteUrl) {
      imgEl.src = spriteUrl;
      imgEl.alt = data.name;
      imgEl.classList.remove("hidden");
    } else {
      imgEl.classList.add("hidden");
    }

    nameEl.textContent = capFirst(data.name);
    idEl.textContent = `Pokemon n° ${data.id}`;
    heightEl.textContent = `Height: ${data.height}`;
    weightEl.textContent = `Weight: ${data.weight}`;

    const types = data.types
      .sort((a, b) => a.slot - b.slot)
      .map((t) => t.type.name);
    typeEl.textContent = `Type: ${types.join(" / ")}`;

    errorEl.classList.add("hidden");
  } catch (err) {
    console.error(err);
    showError();
  } finally {
    hideLoading();
  }
}

function getRandomPokemonId() {
  const MIN = 1;
  const MAX = 151;
  return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

async function handleRandom() {
  const randomId = getRandomPokemonId();
  await fetchAndDisplayPokemon(randomId);
}

async function handlePrev() {
  const prevId = currentPokemonId - 1;
  if (prevId < 1) return;
  await fetchAndDisplayPokemon(prevId);
}

async function handleNext() {
  const nextId = currentPokemonId + 1;
  if (nextId > 151) return; 
  await fetchAndDisplayPokemon(nextId);
}

btnRandom.addEventListener("click", handleRandom);
btnPrev.addEventListener("click", handlePrev);
btnNext.addEventListener("click", handleNext);
fetchAndDisplayPokemon(currentPokemonId);