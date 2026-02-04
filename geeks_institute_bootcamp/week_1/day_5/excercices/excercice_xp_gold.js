// ===== Exercise 1 : print Full Name
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}
// Example
printFullName({ first: 'Elie', last: 'Schoppik' });
// ===== Exercise 2 : keys and values
function keysAndValues(obj) {
  const keys = Object.keys(obj).sort();
  const values = keys.map(key => obj[key]);
  return [keys, values];
}
// ===== Exercise 3 : Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);

