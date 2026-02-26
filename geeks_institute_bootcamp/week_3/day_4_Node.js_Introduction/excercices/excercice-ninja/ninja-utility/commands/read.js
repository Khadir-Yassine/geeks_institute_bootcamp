const fs = require("fs");
function readFileContent(filePath) {
  if (!filePath) {
    console.log("Please provide a file path. Example: node index.js read ./test.txt");
    return;
  }

  try {
    const content = fs.readFileSync(filePath, "utf8");
    console.log(`Content of ${filePath}:\n`);
    console.log(content);
  } catch (err) {
    console.log("Error reading file:", err.message);
  }
}
module.exports = readFileContent;