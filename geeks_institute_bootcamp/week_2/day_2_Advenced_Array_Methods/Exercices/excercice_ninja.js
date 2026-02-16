const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];


// ===== Solution 1 : Using a loop =====
let totalHumanYearsLoop = 0;

for (let i = 0; i < data.length; i++) {
    if (data[i].type === "dog") {
        totalHumanYearsLoop += data[i].age * 7;
    }
}

console.log("Loop result:", totalHumanYearsLoop);


// ===== Solution 2 : Using reduce() =====
let totalHumanYearsReduce = data.reduce(function (total, animal) {
    if (animal.type === "dog") {
        total = total + animal.age * 7;
    }
    return total;
}, 0);

console.log("Reduce result:", totalHumanYearsReduce);

// EXERRCICE 2 :
const cleanedEmail = ' cannotfillemailformcorrectly@gmail.com '.trim();

// EXERRCICE 3 :
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

let usersObject = {};

for (let i = 0; i < users.length; i++) {
  let fullName = users[i].firstName + " " + users[i].lastName;
  usersObject[fullName] = users[i].role;
}

console.log(usersObject);

// EXERRCICE 4 :
const letters = ['x', 'y', 'z', 'z'];

// ===== 1) Using a FOR loop =====
let count1 = {};

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];

  if (count1[letter]) {
    count1[letter] = count1[letter] + 1;
  } else {
    count1[letter] = 1;
  }
}

console.log("For loop:", count1);

// ===== 2) Using reduce() =====
let count2 = letters.reduce(function(obj, letter) {
  if (obj[letter]) {
    obj[letter] = obj[letter] + 1;
  } else {
    obj[letter] = 1;
  }
  return obj;
}, {});

console.log("Reduce:", count2);

