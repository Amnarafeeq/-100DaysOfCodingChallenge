// Explain the concept of the event loop in JavaScript with an example.
console.log("One");
setTimeout(function () {
    console.log("Two"); // this will run after 1 sec the after the execution of all code.
}, 1000); //  This gets queued to be executed by the event loop
console.log("Three");
