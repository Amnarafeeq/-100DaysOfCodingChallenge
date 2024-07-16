"use strict";
// Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. 
// It should return true if found, otherwise false.
function checkWords(sentence) {
    return sentence.includes("Javascript");
}
console.log(checkWords("Typescript is the superset of Javascript"));
console.log(checkWords("Typescript is a programming language. "));
