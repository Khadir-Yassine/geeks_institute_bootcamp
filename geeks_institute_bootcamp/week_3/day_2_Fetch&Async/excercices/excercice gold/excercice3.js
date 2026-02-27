let resolveAfter2Seconds = function () {

  // This prints immediately when this function is called
  console.log("starting slow promise");

  // Return a Promise (a value we will get later)
  return new Promise(resolve => {

    // Wait 2000ms = 2 seconds
    setTimeout(function () {

      // Resolve the promise with the value "slow"
      resolve("slow");

      // This prints after 2 seconds
      console.log("slow promise is done");

    }, 2000);
  });
};



let resolveAfter1Second = function () {

  // This prints immediately when this function is called
  console.log("starting fast promise");

  // Return a Promise
  return new Promise(resolve => {

    // Wait 1000ms = 1 second
    setTimeout(function () {

      // Resolve the promise with the value "fast"
      resolve("fast");

      // This prints after 1 second
      console.log("fast promise is done");

    }, 1000);
  });
};


let concurrentStart = async function () {

  // Prints immediately when concurrentStart begins
  console.log('==CONCURRENT START with await==');

  // START both promises immediately (NO await here)
  // So both timers start counting at the same time
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // Wait for the slow promise to finish, then print its value
  console.log(await slow);

  // Wait for the fast promise to finish, then print its value
  // (Most likely it's already finished by now)
  console.log(await fast);
};


setTimeout(concurrentStart, 4000);