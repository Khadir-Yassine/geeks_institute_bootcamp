let resolveAfter2Seconds = function () {

  // Prints immediately when this function is called
  console.log("starting slow promise");

  return new Promise(resolve => {
    // Wait 2000ms (2 seconds)
    setTimeout(function () {

      // Finish the promise and return "slow"
      resolve("slow");

      // Prints after 2 seconds
      console.log("slow promise is done");

    }, 2000);
  });
};


let resolveAfter1Second = function () {

  // Prints immediately when this function is called
  console.log("starting fast promise");

  return new Promise(resolve => {
    // Wait 1000ms (1 second)
    setTimeout(function () {

      // Finish the promise and return "fast"
      resolve("fast");

      // Prints after 1 second
      console.log("fast promise is done");

    }, 1000);
  });
};


let parallelPromise = function () {

  // Prints immediately when parallelPromise starts
  console.log('==PARALLEL with Promise.then==');

  // Start the SLOW promise now (it starts running right away)
  // When it finishes, print its resolved value ("slow")
  resolveAfter2Seconds().then((message) => console.log(message));

  // Start the FAST promise now (it also starts running right away)
  // When it finishes, print its resolved value ("fast")
  resolveAfter1Second().then((message) => console.log(message));
};


setTimeout(parallelPromise, 13000);