// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the 
// quotient and the remainder. Use an object to return both values.

function remainder(num1:number, num2:number):{quotient:number, remainder:number}{
    let quotient: number = Math.floor(num1 / num2);
    let remainder: number = num1 % num2; 
    return {quotient,remainder}
}
console.log(remainder(20,3));
console.log(remainder(68,6));
