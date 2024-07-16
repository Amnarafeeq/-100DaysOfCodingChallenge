"use strict";
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
// check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in
//  your array, the if block should print a statement, such as You really like bananas!
let favoriteFruits = ["Mango", "Strawberry", "Kiwi", "Cherry"];
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mangoes! ");
}
console.log("\t");
if (favoriteFruits.includes("Strawberry")) {
    console.log("I really like Strawberries!");
}
console.log("\t");
if (favoriteFruits.includes("Cherry")) {
    console.log("I really like Cherries!");
}
console.log("\t");
if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apples!");
}
console.log("\t");
if (favoriteFruits.includes("Orange")) {
    console.log("I really like Oranges!");
}
