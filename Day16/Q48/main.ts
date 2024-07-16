// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use
//  the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.

let pricesSet1 = [13000,17000,20000];
let pricesSet2 = [2000, 5000, 10000];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a: number, b: number) => a - b)

console.log(combinedPrices);
