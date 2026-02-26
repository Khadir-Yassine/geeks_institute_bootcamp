const readline = require("readline");
const getWeather = require("./weather");
function startDashboard() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askCity() {
    rl.question("Enter a city name (or type 'exit' to quit): ", async (city) => {
      const cleaned = city.trim();

      if (cleaned.toLowerCase() === "exit") {
        console.log("Bye!");
        rl.close();
        return;
      }

      await getWeather(cleaned);
      askCity();
    });
  }

  askCity();
}
module.exports = startDashboard;