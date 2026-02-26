const fs = require("fs");
fs.readFile("source.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  console.log("Source file content:");
  console.log(data);

  fs.writeFile("destination.txt", data, function (err) {
    if (err) {
      console.log("Error writing file:", err);
    } else {
      console.log("Content copied successfully to destination.txt");
    }
  });
});