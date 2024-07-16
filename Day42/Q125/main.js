"use strict";
//  Modify a method in an object to use the this keyword to access another property in the same object.
const multiplyNumbers = {
    num1: 17,
    num2: 42,
    result: function () {
        return this.num1 * this.num2;
    }
};
console.log(multiplyNumbers.result());
