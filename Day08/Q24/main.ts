// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
//  more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

console.log("Equality test with strings:", "Mango" === "Mango" );

console.log("Inequality test with strings:", ("Mango"as string) !== "Banana" );

// • Tests using the lower case function

console.log("Lowercase equality test:", "MY NAME IS AMNA".toLowerCase() === "my name is amna");
console.log("Lowercase inequality test:", "MY NAME IS AMNA".toLowerCase() !== "MY NAME IS AMNA"  );

// • Numerical tests involving equality and inequality, greater than and less than,

console.log("Greater than test:", 34 > 23);
console.log("Less than test:", 45 < 54);

// greater than or equal to, and less than or equal to

console.log("Greater than or equal to test:", 12 >= 10);
console.log("Les than or equal to test:", 10<=11);

// • Tests using "and" and "or" operators
console.log("Tests using 'and' operator:", 100 > 98 && "LAPTOP" === "LAPTOP");
console.log("Tests using 'or' operator:", 1000 <= 1001 || ("LAPTOP" as string)  === "Laptop");

// • Test whether an item is in a array
let favFruits: string[] = ["Mango", "Melon", "Strawberry"]
console.log("'Mango' is included in an array:",favFruits.includes("Mango"));

// • Test whether an item is not in a array
console.log("'Apple' is not included in an array:",favFruits.includes("Mango"));
