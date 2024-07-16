"use strict";
// Iterate over a Map of student IDs and names, and log each pair to the console.
const students = new Map();
students.set(1, "Amna");
students.set(2, "Maryam");
students.set(3, "Nazia");
students.set(4, "Khulood");
students.forEach((names, ids) => {
    console.log(`Student's ID: ${ids}, Student's Name: ${names}`);
});
