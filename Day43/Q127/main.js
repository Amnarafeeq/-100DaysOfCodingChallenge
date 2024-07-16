"use strict";
// Convert a traditional function expression to an arrow function.
const functionExpression = function (num1, num2) {
    return num1 / num2;
};
console.log(functionExpression(80, 2));
const arrowFunction = (num1, num2) => num1 / num2;
console.log(arrowFunction(80, 2));
