import { faker } from "@faker-js/faker";
import promptSync from "prompt-sync";

const prompt = promptSync();
const users = [];
function addFakeUser() {
  const user = {
    name: faker.person.fullName(),
    address: {
      street: faker.location.streetAddress(),
      country: faker.location.country()
    }
  };

  users.push(user);
}
function addManualUser() {
  const name = prompt("Enter your name: ");
  const street = prompt("Enter your street address: ");
  const country = prompt("Enter your country: ");

  const user = {
    name: name,
    address: {
      street: street,
      country: country
    }
  };

  users.push(user);
}
addFakeUser();
addFakeUser();
addFakeUser();
addManualUser();
console.log("\nUsers List:");
console.log(users);