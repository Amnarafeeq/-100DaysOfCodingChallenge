"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log("Equality Test with strings:", "Strawberry" === "Strawberry");
console.log("Iniquality Test with Strings:", "Strawberry" != "Apple");
// • Tests using the lower case function
console.log("Lowercase function:", "AMNA".toLowerCase() === "amna");
console.log("Lowercase function:", "amna".toUpperCase() === "AMNA");
// • Numerical tests involving equality and inequality, 
console.log("Equal to:", 10 === 10);
console.log("Not equal to:", 10 != 5);
// greater than and less than,
console.log("Greater than", "b" > "a");
console.log("Less than", "a" < "b");
// greater than or equal to,
console.log("Greater than or equal to:", 30 >= 29);
console.log("Less than or equal to:", 49 <= 50);
// • Tests using "and" and "or" operators
console.log("Tests using and operator:", "a" === "a" && 100 >= 100);
console.log("Test using or operator:", "car" === "car" || "mobile" === "laptop");
// • Test whether an item is in a array
let fruits = ["Mango", "Banana", "Guava", "Strawberry"];
console.log(`Test "Mango" is in an array:`, fruits.includes("Mango"));
// • Test whether an item is not in a array
console.log(`Test "Orange" is not in an array:`, !fruits.includes("Orange"));
