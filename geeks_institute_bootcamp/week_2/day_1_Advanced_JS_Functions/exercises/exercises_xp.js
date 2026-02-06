// ===== Exercise 1
// #1
function funcOne() {
  let a = 5;
  if(a > 1) {
    a = 3;
  }
  // Prediction: a = 3
  // Explanation: 'a' is initialized as 5. Since 5 > 1, the code enters the 'if' block 
  // and reassigns 'a' to 3. Since 'let' allows reassignment, the final value is 3.
  alert(`inside the funcOne function ${a}`);
}

// #1.1 - Prediction: The alert will display "inside the funcOne function 3".

// #1.2 - If 'const' was used: 
// It would throw a TypeError: Assignment to constant variable. 
// 'const' prevents reassignment after the initial declaration.

//#2
var a = 0;
function funcTwo() {
  a = 5;
}
function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - Sequence Execution:
// 1. funcThree() -> Prediction: a = 0 (Uses the global 'a' initialized at the top)
// 2. funcTwo()   -> Prediction: a is now 5 (Reassigns the global 'a')
// 3. funcThree() -> Prediction: a = 5 (Reflects the updated global value)

// #2.2 - If 'const' was used:
// funcTwo() would throw a TypeError because you cannot reassign a global 'const'.

//#3
function funcFour() {
  window.a = "hello";
}
function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - Prediction: The alert will display "inside the funcFive function hello".
// Explanation: funcFour attaches 'a' to the global 'window' object. 
// In browsers, 'window.a' is accessible simply as 'a' in the global scope.

//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert(`inside the funcSix function ${a}`);
}

// #4.1 - Prediction: a = "test"
// Explanation: This is "Shadowing." The 'a' inside funcSix is a new local variable
// that "shadows" (hides) the global 'a = 1' within that function's scope.

// #4.2 - If 'const' was used:
// It would work exactly the same. You can declare a 'const' inside a function 
// even if a variable with the same name exists globally; they occupy different scopes.

//#5
let b =  2;
if (true) {
  let a = 5;
  // Prediction: a = 5
  alert(`in the if block ${a}`);
}
// Prediction: b = 2
alert(`outside of the if block ${b}`);

// #5.1 - Execution:
// The first alert (inside 'if') shows 5 because 'let' is block-scoped. 
// The second alert shows 2 because the 'a = 5' exists only inside the 'if' block.

// #5.2 - If 'const' was used:
// No change in behavior. 'const' is also block-scoped, so the internal 'a' 
// remains separate from the external 'a'.

// ===== Exercise 2
const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);
// ===== Exercise 3
const isString = (value) => typeof value === 'string';

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));
// ===== Exercise 4
const sum = (a, b) => a + b;
// ===== Exercise 5
// Function Declaration
function convertToGramsDeclaration(kg) {
  return kg * 1000;
}
console.log(convertToGramsDeclaration(5));

// Function Expression
const convertToGramsExpression = function(kg) {
  return kg * 1000;
};
console.log(convertToGramsExpression(10));

// Function declarations are hoisted (can be called before they are defined), while function expressions are not.

// One line arrow function
const convertToGramsArrow = kg => kg * 1000;
console.log(convertToGramsArrow(2.5));

// ===== Exercise 6
((numChildren, partnerName, location, jobTitle) => {
  const sentence = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
  
  const container = document.createElement('p');
  container.textContent = sentence;
  document.body.appendChild(container);
})(3, "Alex", "Tokyo", "Software Engineer");
// ===== Exercise 7
(function(name){
  const navbar = document.querySelector("nav");
  const userDiv = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("span");

  img.src = "image" + name;
  img.style.width = "40px";
  img.style.height = "40px";
  img.style.borderRadius = "50%";
  img.style.marginRight = "10px";

  text.textContent = name;

  userDiv.style.display = "flex";
  userDiv.style.alignItems = "center";

  userDiv.appendChild(img);
  userDiv.appendChild(text);
  navbar.appendChild(userDiv);
})("John");

// ===== Exercise 8
// PART I
function makeJuice(size) {
  function addIngredients(ing1, ing2, ing3) {
    const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  addIngredients("apple", "carrot", "ginger");
}

makeJuice("medium");
// PART II
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(ing1, ing2, ing3) {
    ingredients.push(ing1, ing2, ing3);
  }

  function displayJuice() {
    const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    document.body.innerHTML += `<p>${sentence}</p>`;
  }

  addIngredients("apple", "orange", "lemon");
  addIngredients("strawberry", "blueberry", "mint");
  displayJuice();
}

makeJuice("large");