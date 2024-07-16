// Create an arrow function that takes multiple parameters and returns the product of all parameters.


const restParameter = (...numbers:number[]) => {
  return  numbers.reduce((total,number) => total + number)
}
console.log(restParameter(23,34,3,56,7,86,96,19,40));
  