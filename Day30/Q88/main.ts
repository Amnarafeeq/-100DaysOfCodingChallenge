// Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns the number
//  rounded to the nearest integer.

function roundedNumber(num1:number):number{
    return Math.round(num1) 
}
let roundedResult:number = roundedNumber(87.7678)
console.log(roundedResult);
