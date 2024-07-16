"use strict";
let guestList = ["Maryam", "Nazia", "Khulood", "Khadija"];
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");
let absentGuest = "Khadija";
let newGuest = "Asma";
guestList[3] = newGuest;
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }   
console.log(`${absentGuest} is not coming tonight.`);
console.log(`${newGuest} is coming. `);
console.log("\n\n--------------- Good News About Today's Dinner Plan -----------------\n\n");
console.log("I have found bigger table for dinner. So, we have more people who will join us tonight dinner");
guestList.unshift("Areeba");
guestList.splice(2, 0, "Amna");
guestList.push("Zareen");
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// } 
console.log("\nOH!!! We are late and we've lost our reservation and now only two people are invited for dinner.\n");
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry ${removeGuest}, you are not invited.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log("\n*********\n", "Dear", guestList[i], "\n\nYou are still invited.\n\n", "Thankyou", "\n*************\n");
}
guestList.splice(0, 2);
console.log(guestList);
