/******************** Exercise 1 : Promise.all() ********************/

/*
Promise.all():

- It takes an ARRAY of promises.
- It waits until ALL promises are resolved.
- If all are resolved → it returns a new promise
  that resolves with an ARRAY of results (in same order).
- If ONE promise is rejected → Promise.all is rejected immediately.
*/

const promise1 = Promise.resolve(3); // already resolved with value 3
const promise2 = 42; // not a promise → treated as resolved promise
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo"); // resolves after 3 seconds
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch((error) => {
    console.log(error);
  });

/*
Why this output?

- promise1 gives 3
- promise2 becomes Promise.resolve(42)
- promise3 gives "foo" after 3 seconds
- Promise.all waits for ALL of them
- Then returns array in SAME ORDER: [3, 42, "foo"]
*/



/******************** Exercise 2 : Analyse Promise.all() ********************/

/*
Step by step:

timesTwoAsync(x) returns a promise that resolves with x * 2.

arr = [1, 2, 3]

arr.map(timesTwoAsync) creates:
[
  Promise(2),
  Promise(4),
  Promise(6)
]

Promise.all waits for all promises to finish,
then returns [2, 4, 6]
*/

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result); // [2, 4, 6]
  });

/*
Final Output:
[2, 4, 6]
*/