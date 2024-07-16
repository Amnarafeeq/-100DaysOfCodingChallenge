"use strict";
// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let array = ['Amna', 'Rafeeq', 20, true];
let filterArray = array.filter(item => typeof item === "boolean");
console.log(filterArray);
