// ===== Exercise 1
const landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result += "_";
    }
  };

  const mountain = (x) => {
    result += "/";
    for (let counter = 0; counter < x; counter++) {
      result += "'";
    }
    result += "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};
console.log(landscape());

// ===== Exercise 2
const addTo = x => y => x + y;
// addTo is a higher-order function.
//It takes one argument x
//and returns another function that takes y
//that inner function returns x + y
const addToTen = addTo(10);
//Here, x = 10
//addTo(10) returns a new function:
const result = addToTen(3);
console.log(result); // 13

// ===== Exercise 3
//const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)
//curriedSum is a curried function.
//First call: curriedSum(30)
//This returns a new function: (b) => 30 + b
//Second call: (1)
//30 + 1=31

// ===== Exercise 4
const curriedSum = (a) => (b) => a + b
//This is a curried function.
//It takes a and returns a new function that takes b.
//The result is a + b.
//const add5 = curriedSum(5)
//Here, a = 5
//add5 becomes:(b) => 5 + b
add5(12)
//Replace b with 12: 5 + 12 = 17 

// ===== Exercise 5
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10);

//compose(f, g) returns a new function.
//That function applies g first, then f.
//so compose(add1, add5)
//returns a function that adds 5, then adds 1.
//When we call that function with 10:
//First, add5(10) = 15
//Then, add1(15) = 16
//The final result is 16.
