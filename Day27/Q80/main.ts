// Updating Object Properties: Add a property named color to the existing car object, and then
//  update the year property to 2021. Show how to perform these operations.

let car:any = {
    make: "Toyota", 
    model: "Corolla", 
    year: 2019,
};
car.color = "Black"         // Add color property in object
car.year = 2021             // Update year property
console.log(car);
