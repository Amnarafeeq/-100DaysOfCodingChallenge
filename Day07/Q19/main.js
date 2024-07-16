"use strict";
// Think of something you could store in a array. For example, you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a
//   list containing these items.
const favCities = ["Karachi", "Hyderabad", "Multan", "Lahore", "Islamabad"];
console.log("Here are some of my favourite cities are:");
for (let i = 0; i < favCities.length; i++) {
    console.log(favCities[i]);
}
const favCountries = ["Saudia", "America", "Switzerland", "Greenland", "Maldives"];
console.log("\nHere are some of my favourite countries are:\n");
for (let i = 0; i < favCountries.length; i++) {
    console.log(favCountries[i]);
}
const favLanguages = ["Urdu", "English", "British", "French", "Latin"];
console.log("\nHere are some of my favourite languages are:\n");
favLanguages[5] = "German";
for (let i = 0; i < favLanguages.length; i++) {
    console.log(favLanguages[i]);
}
