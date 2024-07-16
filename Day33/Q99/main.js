"use strict";
// Generate a date object representing your next birthday and log it to the console
function getNextBirthday(month, day) {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(4, 28);
console.log("\n My next birthday will be on:", nextBirthday.toLocaleDateString());
