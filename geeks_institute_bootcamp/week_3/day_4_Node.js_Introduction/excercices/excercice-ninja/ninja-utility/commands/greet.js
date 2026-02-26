const chalk = require("chalk");
function greet(name = "yassine") {
  console.log(chalk.cyan.bold("yassine Utility"));
  console.log(chalk.green(`Hello, ${chalk.yellow.bold(name)}! Welcome to the yassine Utility!`));
}
module.exports = greet;