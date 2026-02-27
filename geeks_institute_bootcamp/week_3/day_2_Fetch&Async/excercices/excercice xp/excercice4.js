// This function returns a Promise
function resolveAfter2Seconds() {

    // A Promise is something that will give us a result in the future
    return new Promise(resolve => {

        // setTimeout waits 2 seconds (2000 milliseconds)
        setTimeout(() => {

            // After 2 seconds, we "resolve" the Promise
            // This means the Promise is finished and gives back the value "resolved"
            resolve('resolved');

        }, 2000);

    });
}


// This is an async function
// async means we can use the word "await" inside it
async function asyncCall() {

    // This runs immediately
    console.log('calling');

    // await means:
    // "Wait here until the Promise is finished"
    // The function pauses for 2 seconds
    let result = await resolveAfter2Seconds();

    // After 2 seconds, the Promise gives back "resolved"
    // Then this line runs
    console.log(result);
}


// We call (run) the function
asyncCall();