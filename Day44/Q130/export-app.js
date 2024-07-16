"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractNumbers = exports.addNumbers = void 0;
// Explain how to export a function from one JavaScript file and import it into another file.
let addNumbers = (num1, num2) => {
    return num1 / num2;
};
exports.addNumbers = addNumbers;
let subtractNumbers = (num1, num2) => {
    return num1 - num2;
};
exports.subtractNumbers = subtractNumbers;
