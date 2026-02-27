let resolveAfter2Seconds = function () {

  // This prints RIGHT AWAY when the function is called
  console.log("starting slow promise");

  // Return a Promise (a value we will get in the future)
  return new Promise(resolve => {

    // Wait 2000ms = 2 seconds
    setTimeout(function () {

      // Finish the promise and send back the value "slow"
      resolve("slow");

      // This prints AFTER 2 seconds (inside setTimeout)
      console.log("slow promise is done");

    }, 2000);
  });
};



let resolveAfter1Second = function () {

  // This prints RIGHT AWAY when the function is called
  console.log("starting fast promise");

  // Return a Promise
  return new Promise(resolve => {

    // Wait 1000ms = 1 second
    setTimeout(function () {

      // Finish the promise and send back the value "fast"
      resolve("fast");

      // This prints AFTER 1 second (inside setTimeout)
      console.log("fast promise is done");

    }, 1000);
  });
};


let sequentialStart = async function () {

  // Prints immediately when sequentialStart starts
  console.log('==SEQUENTIAL START==');

  // 1) Call slow promise and WAIT for it to finish (2 seconds)
  const slow = await resolveAfter2Seconds();

  // After slow finishes, we print the result ("slow")
  console.log(slow);

  // 2) Now call fast promise and WAIT for it to finish (1 second)
  const fast = await resolveAfter1Second();

  // After fast finishes, we print the result ("fast")
  console.log(fast);
};


sequentialStart();