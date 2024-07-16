"use strict";
// Compare two strings to check if they are identical, ignoring case sensitivity
function compareStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareStrings("amna", "Amna"));
console.log(compareStrings("mango", "Apple"));
