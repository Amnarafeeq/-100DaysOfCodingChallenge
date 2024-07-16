"use strict";
// Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function personAge(age) {
    if (age < 13) {
        return "Person is child now.";
    }
    else if (age < 19) {
        return "Person is teenager now.";
    }
    else {
        return "Person is adult now.";
    }
}
console.log(personAge(8));
console.log(personAge(17));
console.log(personAge(21));
