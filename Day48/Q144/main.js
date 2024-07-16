"use strict";
// Explain the use of the Promise.all() method with an example.
Object.defineProperty(exports, "__esModule", { value: true });
const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 has resolved.");
});
const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 has resolved.");
});
const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 has resolved.");
});
Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res); // in an array
});
