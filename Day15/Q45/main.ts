// Cars: Write a function that stores information about a car in a Object. The function should always receive a
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function
//  with the required information and two other name-value pairs, such as a color or an optional feature. Print 
//  the Object that’s returned to make sure all the information was stored correctly.


function car(manufacturer:string, model:string, ...options:[string, any][]){
   let myCar: {[key: string]: any} = {manufacturer ,model};
   options.forEach(([key, value]) => (myCar[key] = value));
   return myCar
}
//  Call the function with required information and additional name-value pairs
let carInfo = car("Toyota", "Corolla", ["Color","Black"], ["Year", 2022]);

// Print the object returned by the function
console.log(carInfo);

