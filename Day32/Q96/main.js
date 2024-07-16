// Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.
var sumNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = sumNumbers.reduce(function (num1, num2) {
    return num1 + num2;
});
console.log(sum);