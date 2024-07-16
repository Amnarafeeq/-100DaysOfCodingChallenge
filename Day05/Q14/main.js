"use strict";
let guestList = ["Maryam", "Nazia", "Khulood", "Khadija"];
for (let i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");
let absentGuest = "Khadija";
let newGuest = "Asma";
guestList[3] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are invited to dinner tonight\n\n", "Thankyou", "\n*************\n");
}
console.log(`${absentGuest} is not coming tonight.`);
console.log(`${newGuest} is coming. `);
