"use strict";
// Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function citiesNames(city) {
    switch (city) {
        case "A":
            console.log("Karachi");
            break;
        case "B":
            console.log("Hyderabad");
            break;
        case "C":
            console.log("Multan");
            break;
        case "D":
            console.log("Lahore");
            break;
        case "E":
            console.log("Islamabad");
            break;
        default:
            console.log(`Not found City Name ${city}.`);
    }
}
citiesNames("Faisalabad");
