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

// ===== Exercise 4

// ===== Exercise ...