"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it in
//   a separate array. Call show_magicians() with each array to show that you have one array of the original names 
//   and one array with the Great added to each magician’s name.
const magiciansNames = ["Harry Houdini", "David Blaine", "Criss Angel"];
function magician(array) {
    return array;
}
function showMagicians(magicians) {
    magiciansNames.forEach((magicianName) => {
        console.log(magicianName);
    });
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magiciansNames[i] = " The Great " + magicians[i];
    }
}
const unchangedArray = magician(magiciansNames);
makeGreat(unchangedArray);
console.log("\n\nThis is original array\n");
showMagicians(magiciansNames);
console.log("\n\n This is modified copied array. \n");
showMagicians(unchangedArray);
