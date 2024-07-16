"use strict";
// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any 
// other number you give them later.
function addNumbers(numbers) {
    return function (number) {
        return number + numbers;
    };
}
let addForty = addNumbers(40);
console.log(addForty(30));
let userProfile = (function () {
    // The user's details are kept inside
    let name = "John";
    let age = 30;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo();
