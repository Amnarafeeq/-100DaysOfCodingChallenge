"use strict";
// Create a Promise that resolves with "Hello, World!" after 2 seconds.
Object.defineProperty(exports, "__esModule", { value: true });
const promiseResolved = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 2000);
});
promiseResolved.then((res) => {
    console.log(res);
});
