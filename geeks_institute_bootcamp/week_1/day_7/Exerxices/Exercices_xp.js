// ===== Exercice 1 :
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// show colors with numbers
colors.forEach(function(color, index) {
  console.log((index + 1) + "# choice is " + color + ".");
});

// check if Violet exists
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// ==== Exercise 2 :

const ordinal = ["th","st","nd","rd"];

colors.forEach(function(color, index) {
  let number = index + 1;

  let ending = (number === 1) ? ordinal[1] :
               (number === 2) ? ordinal[2] :
               (number === 3) ? ordinal[3] :
               ordinal[0];

  console.log(number + ending + " choice is " + color + ".");
});

// ===== Exercise 3 :

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// spread operator (...) inserts elements of arrays inside a new array
// so the array becomes:
// ['bread', "carrot", "potato", 'chicken', "apple", "orange"]
const result = ['bread', ...vegetables, 'chicken', ...fruits];

console.log(result); 
// Output: ["bread","carrot","potato","chicken","apple","orange"]



// ------2------
const country = "USA";

// spreading a string splits it into characters
// "USA" -> ["U","S","A"]
console.log([...country]);
// Output: ["U","S","A"]



// ------Bonus------
let newArray = [...[,,]];

// [,,] is an array with 2 empty holes (not undefined)
// spreading converts holes into undefined values
// [,,] -> [undefined, undefined]
console.log(newArray);
// Output: [undefined, undefined]

// ===== Exercise 4 :

const users = [
 { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
 { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
 { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
 { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
 { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
 { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
 { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1  map
const welcomeStudents = users.map(function(user){
  return "Hello " + user.firstName;
});

console.log(welcomeStudents);


// 2 filter
const fullStackResidents = users.filter(function(user){
  return user.role === "Full Stack Resident";
});

console.log(fullStackResidents);


// 3 BONUS → filter + map 
const lastNames = users
  .filter(function(user){
    return user.role === "Full Stack Resident";
  })
  .map(function(user){
    return user.lastName;
  });

console.log(lastNames);

// ===== Exercise 5 :

