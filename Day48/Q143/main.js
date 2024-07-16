"use strict";
// Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
Object.defineProperty(exports, "__esModule", { value: true });
const myPromise = new Promise((resolve, reject) => {
    let userName = "Amna";
    if (userName === "asma") {
        resolve("Promise resolved");
    }
    else {
        console.log("Promise Rejected");
    }
});
myPromise
    .then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error); // .catch method is used when promise is rejected.
});
