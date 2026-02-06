// ===== Exercise 1
let person1 = {
  fullName: "Yassine Khadir",
  mass: 85, 
  height: 1.85,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

let person2 = {
  fullName: "Mohamed Amine",
  mass: 72, 
  height: 1.60,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
function compareBMI(p1, p2) {

  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the largest BMI (${bmi1.toFixed(2)})`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the largest BMI (${bmi2.toFixed(2)})`);
  } else {
    console.log("They have the same BMI!");
  }
}
compareBMI(person1, person2);
// ===== Exercise 2
function findAvg(gradesList) {
  let sum = 0;

  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }

  let average = sum / gradesList.length;
  
  console.log("Average Grade:", average.toFixed(2));

  if (average >= 65) {
    console.log("Congratulations! You passed.");
  } else {
    console.log("Unfortunately, you failed and must repeat the course.");
  }
}

let myGrades = [80, 55, 70, 90, 60];
findAvg(myGrades);

