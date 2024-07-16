// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any 
// other number you give them later.

function addNumbers(numbers : number) : (number:any) => number{
     return function (number : number) : number {
        return number + numbers;
     };
}

let addForty = addNumbers(40);
console.log(addForty(30));
