"use strict";
// Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBananaWithMango(array) {
    const index = array.indexOf("Banana");
    array[index] = "Mango";
}
let fruitsNames = ["Apple", "Banana", "Orange"];
replaceBananaWithMango(fruitsNames);
console.log(fruitsNames);
