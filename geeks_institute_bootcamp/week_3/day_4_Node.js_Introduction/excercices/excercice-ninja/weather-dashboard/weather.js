const axios = require("axios");
const chalk = require("chalk");
async function getWeather(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    console.log(chalk.red("Missing API key! Set OPENWEATHER_API_KEY in your environment."));
    return;
  }
  if (!city || city.trim() === "") {
    console.log(chalk.red("City name cannot be empty."));
    return;
  }
  const url = "https://api.openweathermap.org/data/2.5/weather";
  try {
    const response = await axios.get(url, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric" 
      }
    });
    const data = response.data;
    const name = data.name;
    const country = data.sys.country;
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    console.log(chalk.cyan.bold("\nWeather Dashboard"));
    console.log(chalk.yellow(`Location: ${name}, ${country}`));
    console.log(chalk.green(`Temperature: ${temp}°C`));
    console.log(chalk.green(`Feels like: ${feelsLike}°C`));
    console.log(chalk.magenta(`Description: ${desc}`));
    console.log(chalk.blue(`Humidity: ${humidity}%\n`));
  } catch (error) {
    const message =
      error.response?.data?.message || error.message;

    console.log(chalk.red(`Error: ${message}`));
  }
}
module.exports = getWeather;