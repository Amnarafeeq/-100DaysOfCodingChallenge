"use strict";
// Write a function that returns the current date in the format "DD-MM-YYYY
function currentDate() {
    let date = new Date();
    return date.toLocaleDateString();
}
console.log("Current date is :", currentDate());
