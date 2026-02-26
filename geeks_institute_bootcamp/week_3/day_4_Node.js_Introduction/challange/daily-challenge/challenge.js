const { greet } = require("./greeting");
const { showColorfulMessage } = require("./colorful-message");
const { readAndPrintFile } = require("./read-file");

console.log(greet("Yassine"));
console.log();

showColorfulMessage();
console.log();

readAndPrintFile();