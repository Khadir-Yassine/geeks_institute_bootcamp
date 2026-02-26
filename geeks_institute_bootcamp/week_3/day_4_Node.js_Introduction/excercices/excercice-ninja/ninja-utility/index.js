const { Command } = require("commander");
const greet = require("./commands/greet");
const fetchData = require("./commands/fetch");
const readFileContent = require("./commands/read");
const program = new Command();
program
  .name("ninja-utility")
  .description("A Node.js CLI utility with multiple commands")
  .version("1.0.0");

program
  .command("greet")
  .description("Print a colorful greeting")
  .option("-n, --name <name>", "Your name")
  .action((options) => {
    greet(options.name);
  });

program
  .command("fetch")
  .description("Fetch data from a public API and display it")
  .action(() => {
    fetchData();
  });

program
  .command("read")
  .description("Read and display the content of a file")
  .argument("<path>", "File path to read")
  .action((path) => {
    readFileContent(path);
  });
program.parse(process.argv);