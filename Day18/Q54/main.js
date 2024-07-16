"use strict";
// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based
//  on what you need at that moment, like adjusting labels based on user choices.
function obj(key, value) {
    let object = {};
    object[key] = value;
    return object;
}
let keyValue = obj("Language", "Javascript");
console.log(keyValue);
