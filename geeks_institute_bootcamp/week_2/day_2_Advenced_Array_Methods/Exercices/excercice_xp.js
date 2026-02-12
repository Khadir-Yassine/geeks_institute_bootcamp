// Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++) {
  console.log((i + 1) + "# choice is " + colors[i] + ".");
}

if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}


// Exercise 2
const ordinal = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {
  let n = i + 1;
  let suffix = n === 1 ? ordinal[1] : n === 2 ? ordinal[2] : n === 3 ? ordinal[3] : ordinal[0];
  console.log(n + suffix + " choice is " + colors[i]);
}


// Exercise 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);

const country = "USA";
console.log([...country]);

let newArray = [...[,,]];
console.log(newArray);


// Exercise 4
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" }
];

let welcomeStudents = [];
for (let i = 0; i < users.length; i++) {
  welcomeStudents.push("Hello " + users[i].firstName);
}
console.log(welcomeStudents);

let fullStackResidents = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].role === "Full Stack Resident") {
    fullStackResidents.push(users[i]);
  }
}
console.log(fullStackResidents);

let lastNames = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].role === "Full Stack Resident") {
    lastNames.push(users[i].lastName);
  }
}
console.log(lastNames);


// Exercise 5
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

let sentence = "";
for (let i = 0; i < epic.length; i++) {
  if (i === 0) {
    sentence = epic[i];
  } else {
    sentence = sentence + " " + epic[i];
  }
}
console.log(sentence);


// Exercise 6
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

let passedStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].isPassed === true) {
    passedStudents.push(students[i]);
  }
}
console.log(passedStudents);

for (let i = 0; i < students.length; i++) {
  if (students[i].isPassed === true) {
    console.log("Good job " + students[i].name + ", you passed the course in " + students[i].course);
  }
}
