// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
console.log("\n***** If the aliens's color is Green. *****");
var alienColor = "Green";
if (alienColor === "Green") {
    console.log("Congratulation! you just earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("Congratulation! you just earned 10 points.");
}
else if (alienColor === "Red") {
    console.log("Congratulation! you just earned 15 points.");
}
else {
    console.log("Select one color to earn points. ");
}
console.log("\n***** If the alien's color is Yellow. *****");
alienColor = "Yellow";
if (alienColor === "Green") {
    console.log("Congratulation! you just earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("Congratulation! you just earned 10 points.");
}
else if (alienColor === "Red") {
    console.log("Congratulation! you just earned 15 points.");
}
else {
    console.log("Select one color to earn points");
}
console.log("\n***** If the alien's color is Red. *****");
alienColor = "Red";
if (alienColor === "Green") {
    console.log("Congratulation! you just earned 5 points.");
}
else if (alienColor === "Yellow") {
    console.log("Congratulation! you just earned 10 points.");
}
else if (alienColor === "Red") {
    console.log("Congratulation! you just earned 15 points.");
}
else {
    console.log("Select one color to earn points.");
}
