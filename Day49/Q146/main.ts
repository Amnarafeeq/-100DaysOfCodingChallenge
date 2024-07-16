// Show an example of a callback function used to filter an array of numbers


const arrNumbers:number[] = [2,56,8,3,7,90,6,43,87]


const filterNumbers:number[] = arrNumbers.filter((number) => number > 40)

console.log(filterNumbers);
