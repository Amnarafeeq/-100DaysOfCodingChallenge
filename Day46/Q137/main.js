// Implement a try-catch block to handle potential errors in a block of code.
try {
    // intentionally causing an error
    throw new Error("An error is found");
}
catch (error) {
    console.log(error.message);
}
