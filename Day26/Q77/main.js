"use strict";
// Default Parameters: Write a function that greets a user. It should take the user's name as a parameter
//  and say hello. If no name is given, it should greet an anonymous user.
function defaultParameter(userName = "Anonymous user") {
    console.log(`Hello! ${userName}.`);
}
defaultParameter("Amna");
defaultParameter();