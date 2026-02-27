let resolveAfter2Seconds = function () {

  // This logs immediately when the function is called
  console.log("starting slow promise");

  // Return a Promise (value comes later)
  return new Promise(resolve => {

    // Wait 2000ms (2 seconds)
    setTimeout(function () {

      // Finish the promise and return "slow"
      resolve("slow");

      // This logs after 2 seconds
      console.log("slow promise is done");

    }, 2000);
  });
};


let resolveAfter1Second = function () {

  // This logs immediately when the function is called
  console.log("starting fast promise");

  // Return a Promise
  return new Promise(resolve => {

    // Wait 1000ms (1 second)
    setTimeout(function () {

      // Finish the promise and return "fast"
      resolve("fast");

      // This logs after 1 second
      console.log("fast promise is done");

    }, 1000);
  });
};


let concurrentPromise = function () {

  // Logs immediately when concurrentPromise starts
  console.log('==CONCURRENT START with Promise.all==');

  // Promise.all:
  // - starts all promises at the same time
  // - waits for ALL to finish
  // - returns an array of results in the SAME ORDER as you gave them
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()])

    .then((messages) => {
      // messages is an array: ["slow", "fast"]

      console.log(messages[0]); // prints "slow"
      console.log(messages[1]); // prints "fast"
    });
};


setTimeout(concurrentPromise, 1000);