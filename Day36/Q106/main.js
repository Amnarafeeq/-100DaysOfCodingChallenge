"use strict";
// : Determine if a given year is a leap year using comparison operators.
function leapYearComparison(year) {
    return (year % 4 === 0 && year % 100 == 0) || year % 4 !== 0;
}
console.log(leapYearComparison(2024));
console.log(leapYearComparison(2019));
