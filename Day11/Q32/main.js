"use strict";
// Checking Usernames: Do the following to create a program that simulates how websites
//  ensure that everyone has a unique username.
//  If it has, print a message that the person will need to enter a new username. If a 
//  username has not been used, print a message saying that the username is available.
// • Make a list of five or more usernames called current_users.
const currentUsers = ["James", "Michael", "John", "David", "William"];
// • Make another list of five usernames called new_users. Make sure one or two of
//  the new usernames are also in the current_users list.
const newUsers = ["James", "Marry", "Sarah", "David", "Sunny"];
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
// should not be accepted.
const currentUsersLower = currentUsers.map(user => user.toLowerCase());
// • Loop through the new_users list to see if each new username has already been used.
newUsers.forEach(user => {
    const userLower = user.toLowerCase();
    if (currentUsersLower.includes(userLower)) {
        console.log(`Sorry, the user name ${user} is not available. Please enter a new username.`);
    }
    else {
        console.log(`The user name ${user} is available.`);
    }
});
