/********************  Exercise 1 : Comparison ********************/

function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(num + " is less than or equal to 10");
    } else {
      reject(num + " is greater than 10");
    }
  });
}

// Test 1 → should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// Test 2 → should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));



/********************  Exercise 2 : Promise (4 seconds) ********************/

const promise4Sec = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4 seconds
});

promise4Sec.then(result => console.log(result));



/********************  Exercise 3 : Resolve & Reject ********************/

// Promise.resolve
const resolvedPromise = Promise.resolve(3);

resolvedPromise.then(result => console.log(result)); // 3


// Promise.reject
const rejectedPromise = Promise.reject("Boo!");

rejectedPromise.catch(error => console.log(error)); // Boo!