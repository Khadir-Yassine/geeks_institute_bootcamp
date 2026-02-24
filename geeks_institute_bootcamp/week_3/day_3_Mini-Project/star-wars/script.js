const contentEl = document.getElementById("content");
const btn = document.getElementById("btn");

const BASE = "https://www.swapi.tech/api";
const MAX_CHARACTERS = 83;

function getRandomId() {
  return Math.floor(Math.random() * MAX_CHARACTERS) + 1;
}

async function fetchCharacter(id) {
  const res = await fetch(`${BASE}/people/${id}`);
  if (!res.ok) throw new Error("Character request failed");
  const data = await res.json();

  return data.result.properties;
}

async function fetchHomeworldName(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Homeworld request failed");
  const data = await res.json();

  return data.result.properties.name;
}

function renderCharacter({
  name,
  height,
  gender,
  birth_year,
  homeworldName,
}) {
  contentEl.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Height:</strong> ${height}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Birth Year:</strong> ${birth_year}</p>
    <p><strong>Home World:</strong> ${homeworldName}</p>
  `;
}

function renderLoading() {
  contentEl.innerHTML = `
    <div class="loading">
      <i class="fa-solid fa-spinner fa-spin"></i>
      <p>Loading...</p>
    </div>
  `;
}

function renderError() {
  contentEl.innerHTML = `<p class="error">Oh No! That person isnt available.</p>`;
}
async function handleClick() {
  renderLoading();

  try {
    const id = getRandomId();

    const character = await fetchCharacter(id);
    const homeworldName = await fetchHomeworldName(character.homeworld);

    renderCharacter({
      name: character.name,
      height: character.height,
      gender: character.gender,
      birth_year: character.birth_year,
      homeworldName,
    });
  } catch (err) {
    renderError();
  }
}

btn.addEventListener("click", handleClick);