// ====== Daily Challenge 1
const planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];
const planetColors = {
    'Mercury': '#8C7853',
    'Venus': '#FFC649',
    'Earth': '#4A90E2',
    'Mars': '#E27B58',
    'Jupiter': '#C88B3A',
    'Saturn': '#FAD5A5',
    'Uranus': '#4FD0E7',
    'Neptune': '#4166F5'
};
const listPlanets = document.querySelector('.listPlanets');
planets.forEach(planetName => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.style.backgroundColor = planetColors[planetName];
    planetDiv.textContent = planetName;
    listPlanets.appendChild(planetDiv);
});
// ====== Daily Challenge 2
const userInput = prompt("Enter several words separated by commas:");
const wordsArray = userInput.split(',').map(word => word.trim());
let maxLength = 0;
wordsArray.forEach(word => {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
});
const topBorder = '*'.repeat(maxLength + 4);
console.log(topBorder);
wordsArray.forEach(word => {
    const spacesNeeded = maxLength - word.length;
    const line = `* ${word}${' '.repeat(spacesNeeded)} *`;
    console.log(line);
});
const bottomBorder = '*'.repeat(maxLength + 4);
console.log(bottomBorder);
