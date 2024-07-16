"use strict";
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of 
// its properties and values.
function iteratingOverObjectProperties(objects) {
    for (let property in objects) {
        console.log(`${property}:${objects[property]}`);
    }
}
iteratingOverObjectProperties({ make: "Toyota", model: "Corolla", year: 2022, color: "White" });
