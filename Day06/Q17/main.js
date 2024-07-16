"use strict";
// Store the locations in a array. Make sure the array is not in alphabetical order
let visitPlaces = ["Kashmir", "Swat", "Hunza", "Skardu", "Naran Kaghan"];
console.log(visitPlaces);
// Print your array in alphabetical order without modifying the actual list
console.log([...visitPlaces].sort());
//  Show that your array is still in its original order by printing it.
console.log(visitPlaces);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log([...visitPlaces].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log(visitPlaces);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log([...visitPlaces].reverse());
// Reverse the order of your list again. Print the list to show it’s back to its original order
console.log(visitPlaces);
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log([...visitPlaces].sort());
