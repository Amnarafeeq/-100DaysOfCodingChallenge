"use strict";
// Create two modules; one that exports a class, and another that imports the class and creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myName = void 0;
class myName {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
exports.myName = myName;
