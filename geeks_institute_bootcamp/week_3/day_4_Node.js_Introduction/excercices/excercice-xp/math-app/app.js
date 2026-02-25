const _ = require("lodash");

const math = require("./math");

const sum = math.add(10, 5);
const product = math.multiply(4, 3);

console.log("Addition:", sum);
console.log("Multiplication:", product);

const numbers = [1, 2, 3, 4, 5];

const reversed = _.reverse([...numbers]); 

console.log("Original Array:", numbers);
console.log("Reversed Array using lodash:", reversed);