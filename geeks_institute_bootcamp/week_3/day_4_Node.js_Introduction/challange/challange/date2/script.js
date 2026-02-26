const inquirer = require("inquirer");
const { minutesLived } = require("./date");

inquirer
  .prompt([
    {
      type: "input",
      name: "birthdate",
      message: "Enter your birthdate (YYYY-MM-DD):"
    }
  ])
  .then((answers) => {
    console.log(minutesLived(answers.birthdate));
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });