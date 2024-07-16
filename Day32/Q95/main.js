"use strict";
// Write a function that uses the .filter() method to return an array of numbers greater than 10.
function greaterNumber(numbers) {
    return numbers.filter(number => number > 10);
}
let result = greaterNumber([1, 76, 53, 9, 4, 72, 11]);
console.log(result);
