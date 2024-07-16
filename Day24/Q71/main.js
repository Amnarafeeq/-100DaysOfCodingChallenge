"use strict";
// Compare let and const: Create two examples where let allows reassignment but const does not.
//  Try to reassign a const-declared variable and catch the error.
let number1 = 6;
number1 = 10;
console.log(number1); // Let allows to reassign     
const number2 = 11;
number2 = 12; // Cannot assign to 'number2' because it is a constant
console.log(number2);
