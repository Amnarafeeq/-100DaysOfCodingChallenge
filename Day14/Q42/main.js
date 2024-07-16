"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
//  modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to
//   see that the list has actually been modified.
const magiciansNames = ["Harry Houdini", "David Blaine", "Criss Angel"];
function showMagicians(magicians) {
    magiciansNames.forEach((magiciansNames) => {
        console.log(magiciansNames);
    });
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magiciansNames[i] = " The Great " + magicians[i];
    }
}
makeGreat(magiciansNames);
showMagicians(magiciansNames);
