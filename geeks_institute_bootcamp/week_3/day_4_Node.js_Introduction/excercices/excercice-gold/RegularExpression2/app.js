const prompt = require("prompt-sync")();
const fullName = prompt("Enter your full name (Example: John Doe): ");
const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
if (regex.test(fullName)) {
  console.log("Valid name!");
} else {
  console.log("Invalid name!");
  console.log("Rules:");
  console.log("- Only letters allowed");
  console.log("- Only one space");
  console.log("- First letter of each name must be uppercase");
}