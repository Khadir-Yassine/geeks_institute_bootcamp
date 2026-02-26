const chalk = require("chalk");
function showColorfulMessage() {
  console.log(chalk.blue.bold("Color time!"));
  console.log(chalk.green("This message is green."));
  console.log(chalk.yellow("This one is yellow."));
  console.log(chalk.magentaBright("And this is magenta!"));
}
module.exports = { showColorfulMessage };