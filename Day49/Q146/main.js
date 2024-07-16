// Show an example of a callback function used to filter an array of numbers.
var arrNumbers = [2, 56, 8, 3, 7, 90, 6, 43, 87];
var filterNumbers = arrNumbers.filter(function (number) { return number > 40; });
console.log(filterNumbers);
