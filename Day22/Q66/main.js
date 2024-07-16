"use strict";
// Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say
//  true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function checkBothTrue(val1, val2) {
    return val1 && val2;
}
let result = checkBothTrue(false, true);
console.log(result);
let result2 = checkBothTrue(true, true);
console.log(result2);
