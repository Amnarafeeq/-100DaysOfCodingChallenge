"use strict";
// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
// function findAverage(...numbers:number[]) {
//      let total = numbers.reduce((sum,score) => sum + score, 0)
//     return total / numbers.length
//     }
// let average = findAverage(10,40,76,89,54,97)    
// console.log("The Average is:" + average);
function makeAdder(valueToAdd) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
let addFive = makeAdder(5);
console.log(addFive(10));
