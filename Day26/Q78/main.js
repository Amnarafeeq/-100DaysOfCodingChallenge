"use strict";
// Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one 
// of each that performs the same task, such as squaring a number.
// function expression can be stored in a variable
const functionWithExpression = function (num) {
    return num * num;
};
let result = functionWithExpression(5);
console.log(result);
// in function declaration, function can be invoke before declaration
console.log(functionWithDeclaration(5));
function functionWithDeclaration(num) {
    return num * num;
}
