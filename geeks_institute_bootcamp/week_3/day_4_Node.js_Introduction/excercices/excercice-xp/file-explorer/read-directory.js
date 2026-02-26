const fs = require("fs");
fs.readdir(".", function (err, files) {
  if (err) {
    console.log("Error reading directory:", err);
    return;
  }

  console.log("Files in this directory:");

  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});