let guestList: string[] = ["Maryam", "Nazia", "Khulood", "Khadija"]
// for(let i=0; i<guestList.length; i++){
//     console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
// }
console.log("*------------ Here is someone changed in today's dinner plan. ------------*   ");

let absentGuest: string = "Khadija"
let newGuest: string = "Asma"
    guestList[3] = newGuest;
    for(let i=0; i<guestList.length; i++){
        console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
    }   
    console.log(`${absentGuest} is not coming tonight.`);
    console.log(`${newGuest} is coming. `);
    
console.log("\n\n--------------- Good News About Today's Dinner Plan -----------------\n\n");

console.log("I have found bigger table for dinner. so, we have more people  who will join us tonight dinner");

guestList.unshift("Areeba");
guestList.splice(2, 0, "Amna" );
guestList.push("Zareen");

for(let i=0; i<guestList.length; i++){
    console.log( "\n*********\n","Dear",guestList[i],"\n\nYou are invited to dinner tonight\n\n","Thankyou","\n*************\n");
}   

    