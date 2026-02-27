const apiKey = "n3p2bbVho0BuW9XY80MWtd3yyPrkKH4V";
const query = "hilarious";
const rating = "g";

const url = `https://api.giphy.com/v1/gifs/search?q=${query}&rating=${rating}&api_key=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("GIPHY API Response:", data);
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });