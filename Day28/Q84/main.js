"use strict";
// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word
//  "JavaScript" with "TypeScript".
function replacingStringsText(sentence) {
    console.log(sentence.replace(/Javascript/g, "Typescript"));
}
replacingStringsText("I like Javascript and i am learning Javascript. I want to be a Javascript programmer.");
