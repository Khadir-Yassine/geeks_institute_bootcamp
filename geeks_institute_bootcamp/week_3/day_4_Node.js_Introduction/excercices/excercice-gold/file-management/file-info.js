const fs = require("fs");
const path = require("path");
function showFileInfo() {
  const filePath = path.join(__dirname, "data", "example.txt");
  console.log("File Path:", filePath);
  const exists = fs.existsSync(filePath);
  console.log("File exists:", exists);
  if (exists) {
    const stats = fs.statSync(filePath);
    console.log("File size (bytes):", stats.size);
    console.log("Creation time:", stats.birthtime);
  }
}
module.exports = showFileInfo;