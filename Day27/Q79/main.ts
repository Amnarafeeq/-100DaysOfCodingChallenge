//  Creating and Accessing Object Properties: Construct an object representing a car with
//  properties for make, model, and year. Then, show how you can access the model property of the car.

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
}
// There are two ways of accessing properties of an object.

console.log(car.model);         // Accessing model property of car.
console.log(car["model"]);      // Another way of accessing model property of car.
