// Create a function that accepts a callback and invokes it with some arguments.

function callBackFunction(cb:(num1:number,num2:number) =>void,
         num1:number,
        num2:number):void{
     cb(num1,num2)
}
const sumNumbers = (num3:number,num4:number) =>{
    console.log(num3 + num4);
}
callBackFunction(sumNumbers,67,4)