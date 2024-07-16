"use strict";
// Find the Average Grade: Given a list of grades, calculate the average grade.
let gradesNumbers = [98, 90, 87, 85, 92, 82];
let avgGrades = gradesNumbers.reduce((total, grade) => total + grade, 0) / gradesNumbers.length;
console.log(`${avgGrades}%`);
