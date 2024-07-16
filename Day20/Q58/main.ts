// Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function findAverage(...numbers:number[]) {
     let total = numbers.reduce((sum,score) => sum + score, 0)
    return total / numbers.length
    }
let average = findAverage(10,40,76,89,54,97)    
console.log("The Average is:" + average);
