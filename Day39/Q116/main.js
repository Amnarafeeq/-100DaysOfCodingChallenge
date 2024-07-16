"use strict";
// Create a switch case that matches several cases to the same code block, representing seasons.
function seasonNames(season) {
    switch (season) {
        case "December":
        case "January":
        case "February":
            console.log("It's Winter Season.");
            break;
        case "March":
        case "April":
        case "May":
            console.log("It's Spring Season.");
            break;
        case "June":
        case "July":
        case "August":
            console.log("It's Summer Season.");
            break;
        case "September":
        case "October":
        case "November":
            console.log("It's Autumn Season.");
            break;
        default:
            console.log("Invalid Month!");
    }
}
seasonNames("April");
