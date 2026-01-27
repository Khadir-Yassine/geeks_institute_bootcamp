// ===== Exercise 1
//Part I - Review about arrays
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people[people.indexOf("James")] = "Jason";
people.push("Yassine");
console.log(people.indexOf("Mary"));
const peopleCopy = people.slice(1, 3);
console.log(people.indexOf("Foo"));
let last = people[people.length - 1];
//Part II - Loops
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }

}
// ===== Exercise 2
const colors = ["Midnight Blue", "Forest Green", "Burnt Orange", "Slate", "Crimson"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// ===== Exercise 3
let number;

do {
    number = Number(prompt("Please enter a number:"));
    console.log("Data type received:", typeof number);
} while (number < 10);

console.log("Success! You entered a number 10 or greater.");
// ===== Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
const aptFloor1 = building.numberOfAptByFloor.firstFloor;
const aptFloor3 = building.numberOfAptByFloor.thirdFloor;

console.log(`Floor 1 has ${aptFloor1} apartments and Floor 3 has ${aptFloor3} apartments.`);
const secondTenant = building.nameOfTenants[1]; // "Dan"
const dansRooms = building.numberOfRoomsAndRent.dan[0];

console.log(`${secondTenant} has ${dansRooms} rooms.`);
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if ((sarahRent + davidRent) > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200.");
} else {
    console.log("Dan's rent stays the same.");
}
// ===== Exercise 5
const family = {
    lastName: "khadir",
    members: 4,
    city: "Casablanca",
};
for (let key in family) {
    console.log(key);
}
for (let key in family) {
    console.log(family[key]);
}
// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "";

for (let key in details) {
    sentence += `${key} ${details[key]} `;
}

console.log(sentence.trim());
// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let initials = [];

for (const name of names) {
    initials.push(name[0]);
}

initials.sort();

const societyName = initials.join("");

console.log(societyName);  