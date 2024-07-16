// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents
//  a number (e.g., "5"). Return their sum as a number.

function mixedType(number:number, stringNumber:string): number{
    return number + Number(stringNumber)
}
console.log(mixedType(20, "10"));
console.log(mixedType(100, "100"));

