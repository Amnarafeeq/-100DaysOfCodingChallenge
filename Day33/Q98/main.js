"use strict";
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.
function daysUntilNewYear() {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    const diffInMilliSec = newYear.getTime() - today.getTime();
    const date = Math.ceil(diffInMilliSec / (1000 * 60 * 60 * 24));
    return date;
}
console.log(daysUntilNewYear() + ' ' + "days are left in New Year's event.");
