import people from "./data.mjs";

function calculateAverageAge(personArray) {
  let totalAge = 0;

  for (let i = 0; i < personArray.length; i++) {
    totalAge += personArray[i].age;
  }

  let average = totalAge / personArray.length;

  console.log("Average Age:", average);
}

calculateAverageAge(people);