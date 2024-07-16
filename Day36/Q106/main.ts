// : Determine if a given year is a leap year using comparison operators.

function leapYearComparison(year:number):boolean{
    return (year % 4 === 0 && year % 100 ! == 0 ) || year % 4 !== 0 ;
}
console.log(leapYearComparison(2024));
console.log(leapYearComparison(2019));

