// Convert a traditional function expression to an arrow function.

const functionExpression = function(num1:number, num2:number){
    return num1 / num2
}
console.log(functionExpression(80,2));

const arrowFunction = (num1:number, num2:number) => num1 / num2
console.log(arrowFunction(80,2));
