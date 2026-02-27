let resolveAfter2Seconds = function () {

  // Prints immediately when called
  console.log("starting slow promise");

  return new Promise(resolve => {
    // Wait 2000ms (2 seconds)
    setTimeout(function () {

      // Resolve promise with "slow"
      resolve("slow");

      // Prints after 2 seconds
      console.log("slow promise is done");

    }, 2000);
  });
};


let resolveAfter1Second = function () {

  // Prints immediately when called
  console.log("starting fast promise");

  return new Promise(resolve => {
    // Wait 1000ms (1 second)
    setTimeout(function () {

      // Resolve promise with "fast"
      resolve("fast");

      // Prints after 1 second
      console.log("fast promise is done");

    }, 1000);
  });
};


let parallel = async function () {

  console.log('==PARALLEL with await Promise.all==');

  // Promise.all starts BOTH async functions at the same time
  // and waits until BOTH are finished
  await Promise.all([

    // JOB 1 (slow)
    (async () => {
      const slowValue = await resolveAfter2Seconds(); // wait 2 seconds
      console.log(slowValue); // prints "slow"
    })(),

    // JOB 2 (fast)
    (async () => {
      const fastValue = await resolveAfter1Second(); // wait 1 second
      console.log(fastValue); // prints "fast"
    })()

  ]);
};

setTimeout(parallel, 5000);