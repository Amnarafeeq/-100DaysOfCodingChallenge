"use strict";
// Create a function that generates a random hexadecimal color code.
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomHexColor() {
    const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; // Returns the random color code
}
console.log(getRandomHexColor());
